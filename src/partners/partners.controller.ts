import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { SuperAdminGuard } from '../auth/super-admin.guard';
import { Partner } from './partner.entity';

@Controller('api/partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get()
  getAll() {
    return this.partnersService.getAll();
  }

  @Post()
  @UseGuards(SuperAdminGuard)
  create(@Body() data: Partial<Partner>) {
    return this.partnersService.create(data);
  }

  @Put(':id')
  @UseGuards(SuperAdminGuard)
  update(@Param('id') id: string, @Body() data: Partial<Partner>) {
    return this.partnersService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(SuperAdminGuard)
  delete(@Param('id') id: string) {
    return this.partnersService.delete(id);
  }
}
