import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { HeroSlideService } from './hero-slide.service';
import { HeroSlide } from './hero-slide.entity';
import { SuperAdminGuard } from '../auth/super-admin.guard';

@Controller('api/hero-slides')
export class HeroSlideController {
  constructor(private heroSlideService: HeroSlideService) {}

  @Get()
  async getAll(): Promise<HeroSlide[]> {
    return this.heroSlideService.getAll();
  }

  @Post()
  @UseGuards(SuperAdminGuard)
  async create(@Body() data: Partial<HeroSlide>): Promise<HeroSlide> {
    return this.heroSlideService.create(data);
  }

  @Put(':id')
  @UseGuards(SuperAdminGuard)
  async update(@Param('id') id: string, @Body() data: Partial<HeroSlide>): Promise<HeroSlide> {
    return this.heroSlideService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(SuperAdminGuard)
  async delete(@Param('id') id: string): Promise<void> {
    return this.heroSlideService.delete(id);
  }
}
