import { Repository } from 'typeorm';
import { Partner } from './partner.entity';
export declare class PartnersService {
    private readonly partnerRepo;
    constructor(partnerRepo: Repository<Partner>);
    getAll(): Promise<Partner[]>;
    create(data: Partial<Partner>): Promise<Partner>;
    update(id: string, data: Partial<Partner>): Promise<Partner | null>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
