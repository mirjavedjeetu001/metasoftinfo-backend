import { Repository } from 'typeorm';
import { ProcessStep } from './process-step.entity';
export declare class ProcessService {
    private processRepository;
    constructor(processRepository: Repository<ProcessStep>);
    getAll(): Promise<ProcessStep[]>;
    create(data: Partial<ProcessStep>): Promise<ProcessStep>;
    update(id: string, data: Partial<ProcessStep>): Promise<ProcessStep>;
    delete(id: string): Promise<void>;
}
