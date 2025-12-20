import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): Promise<import("./project.entity").Project[]>;
    findBySlug(slug: string): Promise<import("./project.entity").Project | null>;
    findOne(id: number): Promise<import("./project.entity").Project>;
    create(dto: CreateProjectDto, req: any): Promise<import("./project.entity").Project>;
    update(id: number, dto: UpdateProjectDto, req: any): Promise<import("./project.entity").Project>;
    remove(id: number, req: any): Promise<void>;
}
