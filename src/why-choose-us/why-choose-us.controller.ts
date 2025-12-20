import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { WhyChooseUsService } from './why-choose-us.service';
import { WhyChooseUs } from './why-choose-us.entity';
import { SuperAdminGuard } from '../auth/super-admin.guard';

@Controller('api/why-choose-us')
export class WhyChooseUsController {
  constructor(private whyService: WhyChooseUsService) {}

  @Get()
  async getAll(): Promise<WhyChooseUs[]> {
    return this.whyService.getAll();
  }

  @Post()
  @UseGuards(SuperAdminGuard)
  async create(@Body() data: Partial<WhyChooseUs>): Promise<WhyChooseUs> {
    return this.whyService.create(data);
  }

  @Put(':id')
  @UseGuards(SuperAdminGuard)
  async update(@Param('id') id: string, @Body() data: Partial<WhyChooseUs>): Promise<WhyChooseUs> {
    return this.whyService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(SuperAdminGuard)
  async delete(@Param('id') id: string): Promise<void> {
    return this.whyService.delete(id);
  }
}
