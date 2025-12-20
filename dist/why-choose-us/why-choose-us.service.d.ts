import { Repository } from 'typeorm';
import { WhyChooseUs } from './why-choose-us.entity';
export declare class WhyChooseUsService {
    private whyRepository;
    constructor(whyRepository: Repository<WhyChooseUs>);
    getAll(): Promise<WhyChooseUs[]>;
    create(data: Partial<WhyChooseUs>): Promise<WhyChooseUs>;
    update(id: string, data: Partial<WhyChooseUs>): Promise<WhyChooseUs>;
    delete(id: string): Promise<void>;
}
