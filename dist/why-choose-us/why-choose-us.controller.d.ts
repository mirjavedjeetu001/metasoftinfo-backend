import { WhyChooseUsService } from './why-choose-us.service';
import { WhyChooseUs } from './why-choose-us.entity';
export declare class WhyChooseUsController {
    private whyService;
    constructor(whyService: WhyChooseUsService);
    getAll(): Promise<WhyChooseUs[]>;
    create(data: Partial<WhyChooseUs>): Promise<WhyChooseUs>;
    update(id: string, data: Partial<WhyChooseUs>): Promise<WhyChooseUs>;
    delete(id: string): Promise<void>;
}
