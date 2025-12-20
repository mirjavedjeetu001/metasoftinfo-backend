import { HeroSlideService } from './hero-slide.service';
import { HeroSlide } from './hero-slide.entity';
export declare class HeroSlideController {
    private heroSlideService;
    constructor(heroSlideService: HeroSlideService);
    getAll(): Promise<HeroSlide[]>;
    create(data: Partial<HeroSlide>): Promise<HeroSlide>;
    update(id: string, data: Partial<HeroSlide>): Promise<HeroSlide>;
    delete(id: string): Promise<void>;
}
