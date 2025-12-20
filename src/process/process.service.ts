import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProcessStep } from './process-step.entity';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(ProcessStep)
    private processRepository: Repository<ProcessStep>,
  ) {}

  async getAll(): Promise<ProcessStep[]> {
    const steps = await this.processRepository.find({ order: { order: 'ASC' } });
    if (steps.length === 0) {
      const defaults = [
        { order: 1, title: 'AI-Powered Discovery Audit', description: 'Free 60-min strategy session to analyze your tech stack' },
        { order: 2, title: 'Hybrid Team Onboarding', description: 'Match with vetted engineers (800+ experts)' },
        { order: 3, title: 'Build with AI Guardrails', description: 'AI pair-programming assistants (70% faster dev)' },
        { order: 4, title: 'Scale with Confidence', description: 'AI-optimized cloud deployment' },
      ];
      for (const d of defaults) {
        await this.processRepository.save(d);
      }
      return this.processRepository.find({ order: { order: 'ASC' } });
    }
    return steps;
  }

  async create(data: Partial<ProcessStep>): Promise<ProcessStep> {
    const step = this.processRepository.create(data);
    return this.processRepository.save(step);
  }

  async update(id: string, data: Partial<ProcessStep>): Promise<ProcessStep> {
    await this.processRepository.update(id, data);
    const updated = await this.processRepository.findOneBy({ id });
    if (!updated) throw new Error('Process step not found');
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.processRepository.delete(id);
  }
}
