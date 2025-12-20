import { PartnersService } from './partners.service';
import { Partner } from './partner.entity';
export declare class PartnersController {
    private readonly partnersService;
    constructor(partnersService: PartnersService);
    getAll(): Promise<Partner[]>;
    create(data: Partial<Partner>): Promise<Partner>;
    update(id: string, data: Partial<Partner>): Promise<Partner | null>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
