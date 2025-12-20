import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testimonial } from './testimonial.entity';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Injectable()
export class TestimonialsService {
  constructor(
    @InjectRepository(Testimonial)
    private readonly testimonialsRepo: Repository<Testimonial>,
  ) {}

  create(dto: CreateTestimonialDto) {
    const entity = this.testimonialsRepo.create(dto);
    return this.testimonialsRepo.save(entity);
  }

  findAll() {
    return this.testimonialsRepo.find({ order: { displayOrder: 'ASC' } });
  }

  async findOne(id: number) {
    const item = await this.testimonialsRepo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Testimonial not found');
    return item;
  }

  async update(id: number, dto: UpdateTestimonialDto) {
    const item = await this.findOne(id);
    Object.assign(item, dto);
    return this.testimonialsRepo.save(item);
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    await this.testimonialsRepo.remove(item);
  }
}
