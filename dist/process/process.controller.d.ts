import { ProcessService } from './process.service';
import { ProcessStep } from './process-step.entity';
export declare class ProcessController {
    private processService;
    constructor(processService: ProcessService);
    getAll(): Promise<ProcessStep[]>;
    create(data: Partial<ProcessStep>): Promise<ProcessStep>;
    update(id: string, data: Partial<ProcessStep>): Promise<ProcessStep>;
    delete(id: string): Promise<void>;
}
