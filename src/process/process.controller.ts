import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ProcessStep } from './process-step.entity';
import { SuperAdminGuard } from '../auth/super-admin.guard';

@Controller('api/process')
export class ProcessController {
  constructor(private processService: ProcessService) {}

  @Get()
  async getAll(): Promise<ProcessStep[]> {
    return this.processService.getAll();
  }

  @Post()
  @UseGuards(SuperAdminGuard)
  async create(@Body() data: Partial<ProcessStep>): Promise<ProcessStep> {
    return this.processService.create(data);
  }

  @Put(':id')
  @UseGuards(SuperAdminGuard)
  async update(@Param('id') id: string, @Body() data: Partial<ProcessStep>): Promise<ProcessStep> {
    return this.processService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(SuperAdminGuard)
  async delete(@Param('id') id: string): Promise<void> {
    return this.processService.delete(id);
  }
}
