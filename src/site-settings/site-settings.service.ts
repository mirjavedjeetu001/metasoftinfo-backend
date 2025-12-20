import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SiteSettings } from './site-settings.entity';

@Injectable()
export class SiteSettingsService {
  constructor(
    @InjectRepository(SiteSettings)
    private settingsRepository: Repository<SiteSettings>,
  ) {}

  async getSettings(): Promise<SiteSettings> {
    let settings = await this.settingsRepository.findOne({ where: {} });
    if (!settings) {
      settings = this.settingsRepository.create({
        siteName: 'Metasoft Info',
        siteDescription: 'Premium Tech Services - Custom Solutions for Growing Businesses',
        footerText: '© 2025 Metasoft Info. All rights reserved.',
        companyEmail: 'hello@metasoftinfo.com',
        companyPhone: '+1 (555) 123-4567',
        companyAddress: '123 Tech Street, San Francisco, CA 94102',
        socialFacebook: 'https://facebook.com/metasoftinfo',
        socialLinkedin: 'https://linkedin.com/company/metasoftinfo',
        socialTwitter: 'https://twitter.com/metasoftinfo',
      });
      await this.settingsRepository.save(settings);
    }
    return settings;
  }

  async updateSettings(data: Partial<SiteSettings>): Promise<SiteSettings> {
    const settings = await this.getSettings();
    Object.assign(settings, data);
    return this.settingsRepository.save(settings);
  }
}
