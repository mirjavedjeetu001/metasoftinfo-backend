import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThemeSettings } from './theme-settings.entity';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Injectable()
export class ThemeService {
  constructor(
    @InjectRepository(ThemeSettings)
    private readonly themeRepo: Repository<ThemeSettings>,
  ) {}

  async ensureSettings(): Promise<ThemeSettings> {
    const current = await this.themeRepo.findOne({ where: { id: 1 } });
    if (current) return current;
    const created = this.themeRepo.create({ id: 1 });
    return this.themeRepo.save(created);
  }

  async getSettings() {
    return this.ensureSettings();
  }

  async updateSettings(dto: UpdateThemeDto) {
    const settings = await this.ensureSettings();
    Object.assign(settings, dto);
    return this.themeRepo.save(settings);
  }
}
