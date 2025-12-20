import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroSection } from './hero-section.entity';
import { SuperAdminGuard } from '../auth/super-admin.guard';

@Controller('api/hero')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @Get()
  async getHero(): Promise<HeroSection> {
    return this.heroService.getHero();
  }

  @Put()
  @UseGuards(SuperAdminGuard)
  async updateHero(@Body() data: Partial<HeroSection>): Promise<HeroSection> {
    return this.heroService.updateHero(data);
  }
}
