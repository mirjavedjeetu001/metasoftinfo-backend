import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WhyChooseUs } from './why-choose-us.entity';

@Injectable()
export class WhyChooseUsService {
  constructor(
    @InjectRepository(WhyChooseUs)
    private whyRepository: Repository<WhyChooseUs>,
  ) {}

  async getAll(): Promise<WhyChooseUs[]> {
    const items = await this.whyRepository.find({ order: { order: 'ASC' } });
    if (items.length === 0) {
      const defaults = [
        { order: 1, title: 'Expert Team', description: 'Senior developers with 10+ years experience' },
        { order: 2, title: 'Agile Process', description: 'Fast iteration, quick results, full transparency' },
        { order: 3, title: 'Proven Track Record', description: '120+ shipped projects across industries' },
        { order: 4, title: 'Modern Tech', description: 'Latest frameworks, tools, and best practices' },
      ];
      for (const d of defaults) {
        await this.whyRepository.save(d);
      }
      return this.whyRepository.find({ order: { order: 'ASC' } });
    }
    return items;
  }

  async create(data: Partial<WhyChooseUs>): Promise<WhyChooseUs> {
    const item = this.whyRepository.create(data);
    return this.whyRepository.save(item);
  }

  async update(id: string, data: Partial<WhyChooseUs>): Promise<WhyChooseUs> {
    await this.whyRepository.update(id, data);
    const updated = await this.whyRepository.findOneBy({ id });
    if (!updated) throw new Error('Item not found');
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.whyRepository.delete(id);
  }
}
