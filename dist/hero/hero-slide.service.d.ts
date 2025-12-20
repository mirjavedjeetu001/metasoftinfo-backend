import { Repository } from 'typeorm';
import { HeroSlide } from './hero-slide.entity';
export declare class HeroSlideService {
    private slideRepository;
    constructor(slideRepository: Repository<HeroSlide>);
    getAll(): Promise<HeroSlide[]>;
    create(data: Partial<HeroSlide>): Promise<HeroSlide>;
    update(id: string, data: Partial<HeroSlide>): Promise<HeroSlide>;
    delete(id: string): Promise<void>;
}
