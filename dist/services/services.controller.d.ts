import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): Promise<import("./service-offering.entity").ServiceOffering[]>;
    findOne(id: number): Promise<import("./service-offering.entity").ServiceOffering>;
    create(dto: CreateServiceDto, req: any): Promise<import("./service-offering.entity").ServiceOffering>;
    update(id: number, dto: UpdateServiceDto, req: any): Promise<import("./service-offering.entity").ServiceOffering>;
    remove(id: number, req: any): Promise<void>;
}
