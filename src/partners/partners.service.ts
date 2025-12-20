import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partner } from './partner.entity';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepo: Repository<Partner>,
  ) {}

  async getAll() {
    return this.partnerRepo.find({
      where: { isActive: true },
      order: { order: 'ASC' },
    });
  }

  async create(data: Partial<Partner>) {
    const partner = this.partnerRepo.create(data);
    return this.partnerRepo.save(partner);
  }

  async update(id: string, data: Partial<Partner>) {
    await this.partnerRepo.update(id, data);
    return this.partnerRepo.findOne({ where: { id } });
  }

  async delete(id: string) {
    return this.partnerRepo.delete(id);
  }
}
