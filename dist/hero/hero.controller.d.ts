import { HeroService } from './hero.service';
import { HeroSection } from './hero-section.entity';
export declare class HeroController {
    private heroService;
    constructor(heroService: HeroService);
    getHero(): Promise<HeroSection>;
    updateHero(data: Partial<HeroSection>): Promise<HeroSection>;
}
