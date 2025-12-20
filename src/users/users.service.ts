import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}

  async onModuleInit() {
    const email = process.env.ADMIN_DEFAULT_EMAIL || 'admin@metasoftinfo.com';
    const password = process.env.ADMIN_DEFAULT_PASSWORD || 'ChangeMe123!';

    const existing = await this.usersRepo.findOne({ where: { email } });
    if (!existing) {
      const passwordHash = await bcrypt.hash(password, 10);
      const admin = this.usersRepo.create({
        email,
        fullName: 'Super Admin',
        passwordHash,
        role: UserRole.SUPER_ADMIN,
      });
      await this.usersRepo.save(admin);
      // Admin bootstrap only runs once; log to console for awareness
      // eslint-disable-next-line no-console
      console.log(`Seeded default admin ${email}`);
    }
  }

  async create(dto: CreateUserDto): Promise<User> {
    const existing = await this.usersRepo.findOne({ where: { email: dto.email } });
    if (existing) {
      throw new BadRequestException('User with this email already exists');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = this.usersRepo.create({
      email: dto.email,
      fullName: dto.fullName,
      role: dto.role ?? UserRole.ADMIN,
      passwordHash,
    });
    return this.usersRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  findByEmail(email: string): Promise<User | null> {
    return this.usersRepo.findOne({ where: { email } });
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepo.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User not found');

    if (dto.email) user.email = dto.email;
    if (dto.fullName) user.fullName = dto.fullName;
    if (dto.role) user.role = dto.role;
    if (dto.password) user.passwordHash = await bcrypt.hash(dto.password, 10);

    return this.usersRepo.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    await this.usersRepo.remove(user);
  }
}
