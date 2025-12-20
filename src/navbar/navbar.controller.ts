import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { NavbarService } from './navbar.service';
import { SuperAdminGuard } from '../auth/super-admin.guard';
import { NavbarMenu } from './navbar-menu.entity';

@Controller('api/navbar-menu')
export class NavbarController {
  constructor(private readonly navbarService: NavbarService) {}

  @Get()
  getAll() {
    return this.navbarService.getAll();
  }

  @Post()
  @UseGuards(SuperAdminGuard)
  create(@Body() data: Partial<NavbarMenu>) {
    return this.navbarService.create(data);
  }

  @Post('seed')
  @UseGuards(SuperAdminGuard)
  seedDefaults() {
    return this.navbarService.seedDefaultMenu();
  }

  @Put(':id')
  @UseGuards(SuperAdminGuard)
  update(@Param('id') id: string, @Body() data: Partial<NavbarMenu>) {
    return this.navbarService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(SuperAdminGuard)
  delete(@Param('id') id: string) {
    return this.navbarService.delete(id);
  }
}
