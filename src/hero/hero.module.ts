import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroSection } from './hero-section.entity';
import { HeroSlide } from './hero-slide.entity';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { HeroSlideController } from './hero-slide.controller';
import { HeroSlideService } from './hero-slide.service';

@Module({
  imports: [TypeOrmModule.forFeature([HeroSection, HeroSlide])],
  controllers: [HeroController, HeroSlideController],
  providers: [HeroService, HeroSlideService],
  exports: [HeroService, HeroSlideService],
})
export class HeroModule {}
