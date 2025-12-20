import { Controller, Get, Post, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { SiteSettingsService } from './site-settings.service';
import { SiteSettings } from './site-settings.entity';
import { SuperAdminGuard } from '../auth/super-admin.guard';

@Controller('api/site-settings')
export class SiteSettingsController {
  constructor(private settingsService: SiteSettingsService) {}

  @Get()
  async getSettings(): Promise<SiteSettings> {
    return this.settingsService.getSettings();
  }

  @Put()
  @UseGuards(SuperAdminGuard)
  async updateSettings(@Body() data: Partial<SiteSettings>): Promise<SiteSettings> {
    return this.settingsService.updateSettings(data);
  }
}
