import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceOffering } from './service-offering.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServiceOffering)
    private readonly servicesRepo: Repository<ServiceOffering>,
  ) {}

  create(dto: CreateServiceDto) {
    const entity = this.servicesRepo.create({ ...dto });
    return this.servicesRepo.save(entity);
  }

  findAll() {
    return this.servicesRepo.find({ order: { displayOrder: 'ASC' } });
  }

  async findOne(id: number) {
    const item = await this.servicesRepo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Service not found');
    return item;
  }

  async update(id: number, dto: UpdateServiceDto) {
    const item = await this.findOne(id);
    Object.assign(item, dto);
    return this.servicesRepo.save(item);
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    await this.servicesRepo.remove(item);
  }
}
