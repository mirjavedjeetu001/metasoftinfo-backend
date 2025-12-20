import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeController } from './theme.controller';
import { ThemeService } from './theme.service';
import { ThemeSettings } from './theme-settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ThemeSettings])],
  controllers: [ThemeController],
  providers: [ThemeService],
  exports: [ThemeService],
})
export class ThemeModule {}
