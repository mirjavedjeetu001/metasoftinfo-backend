import { Repository } from 'typeorm';
import { ServiceOffering } from './service-offering.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesService {
    private readonly servicesRepo;
    constructor(servicesRepo: Repository<ServiceOffering>);
    create(dto: CreateServiceDto): Promise<ServiceOffering>;
    findAll(): Promise<ServiceOffering[]>;
    findOne(id: number): Promise<ServiceOffering>;
    update(id: number, dto: UpdateServiceDto): Promise<ServiceOffering>;
    remove(id: number): Promise<void>;
}
