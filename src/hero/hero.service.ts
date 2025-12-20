import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeroSection } from './hero-section.entity';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(HeroSection)
    private heroRepository: Repository<HeroSection>,
  ) {}

  async getHero(): Promise<HeroSection> {
    let hero = await this.heroRepository.findOne({ where: {} });
    if (!hero) {
      hero = this.heroRepository.create({
        title: 'Scale Your Dev Team With Top Talent in 4 Weeks',
        subtitle: 'We architect, design, and deliver world-class digital products.',
        primaryCta: 'Start Your Project',
        secondaryCta: 'Schedule a Call',
        stat1Value: 120,
        stat1Label: 'Projects Shipped',
        stat2Value: 18,
        stat2Label: 'Years Experience',
        stat3Value: 98,
        stat3Label: 'Client Satisfaction',
      });
      await this.heroRepository.save(hero);
    }
    return hero;
  }

  async updateHero(data: Partial<HeroSection>): Promise<HeroSection> {
    const hero = await this.getHero();
    Object.assign(hero, data);
    return this.heroRepository.save(hero);
  }
}
