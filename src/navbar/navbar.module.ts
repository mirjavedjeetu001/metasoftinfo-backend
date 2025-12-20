import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavbarMenu } from './navbar-menu.entity';
import { NavbarController } from './navbar.controller';
import { NavbarService } from './navbar.service';

@Module({
  imports: [TypeOrmModule.forFeature([NavbarMenu])],
  controllers: [NavbarController],
  providers: [NavbarService],
  exports: [NavbarService],
})
export class NavbarModule {}
