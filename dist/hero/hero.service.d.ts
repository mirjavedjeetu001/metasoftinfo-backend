import { Repository } from 'typeorm';
import { HeroSection } from './hero-section.entity';
export declare class HeroService {
    private heroRepository;
    constructor(heroRepository: Repository<HeroSection>);
    getHero(): Promise<HeroSection>;
    updateHero(data: Partial<HeroSection>): Promise<HeroSection>;
}
