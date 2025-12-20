import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeroSlide } from './hero-slide.entity';

@Injectable()
export class HeroSlideService {
  constructor(
    @InjectRepository(HeroSlide)
    private slideRepository: Repository<HeroSlide>,
  ) {}

  async getAll(): Promise<HeroSlide[]> {
    return this.slideRepository.find({ 
      where: { isActive: true },
      order: { order: 'ASC' } 
    });
  }

  async create(data: Partial<HeroSlide>): Promise<HeroSlide> {
    const slide = this.slideRepository.create(data);
    return this.slideRepository.save(slide);
  }

  async update(id: string, data: Partial<HeroSlide>): Promise<HeroSlide> {
    await this.slideRepository.update(id, data);
    const updated = await this.slideRepository.findOneBy({ id });
    if (!updated) throw new Error('Slide not found');
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.slideRepository.delete(id);
  }
}
