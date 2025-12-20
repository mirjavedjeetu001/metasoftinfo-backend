import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PagesService } from './pages.service';
import { SuperAdminGuard } from '../auth/super-admin.guard';
import { Page } from './page.entity';

@Controller('api/pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  getAll() {
    return this.pagesService.getAll();
  }

  @Get(':slug')
  getBySlug(@Param('slug') slug: string) {
    return this.pagesService.getBySlug(slug);
  }

  @Post()
  @UseGuards(SuperAdminGuard)
  create(@Body() data: Partial<Page>) {
    return this.pagesService.create(data);
  }

  @Post('seed')
  @UseGuards(SuperAdminGuard)
  seedDefaults() {
    return this.pagesService.seedDefaultPages();
  }

  @Put(':id')
  @UseGuards(SuperAdminGuard)
  update(@Param('id') id: string, @Body() data: Partial<Page>) {
    return this.pagesService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(SuperAdminGuard)
  delete(@Param('id') id: string) {
    return this.pagesService.delete(id);
  }
}
