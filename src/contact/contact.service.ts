import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactSubmission } from './contact-submission.entity';
import { ContactSettings } from './contact-settings.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactSubmission)
    private submissionRepo: Repository<ContactSubmission>,
    @InjectRepository(ContactSettings)
    private settingsRepo: Repository<ContactSettings>,
  ) {}

  // Submissions
  async getAllSubmissions(): Promise<ContactSubmission[]> {
    return this.submissionRepo.find({ order: { createdAt: 'DESC' } });
  }

  async createSubmission(data: Partial<ContactSubmission>): Promise<ContactSubmission> {
    const submission = this.submissionRepo.create(data);
    return this.submissionRepo.save(submission);
  }

  async updateSubmissionStatus(id: number, status: string): Promise<ContactSubmission | null> {
    const submission = await this.submissionRepo.findOne({ where: { id } });
    if (!submission) {
      return null;
    }
    submission.status = status;
    return this.submissionRepo.save(submission);
  }

  async deleteSubmission(id: number): Promise<void> {
    await this.submissionRepo.delete(id);
  }

  // Settings
  async getSettings(): Promise<ContactSettings> {
    let settings = await this.settingsRepo.findOne({ where: { id: 1 } });
    if (!settings) {
      settings = this.settingsRepo.create({ id: 1 });
      settings = await this.settingsRepo.save(settings);
    }
    return settings;
  }

  async updateSettings(data: Partial<ContactSettings>): Promise<ContactSettings> {
    await this.settingsRepo.update(1, data);
    return this.getSettings();
  }
}
