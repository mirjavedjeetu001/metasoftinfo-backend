import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsService {
    private readonly projectsRepo;
    constructor(projectsRepo: Repository<Project>);
    create(dto: CreateProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    findBySlug(slug: string): Promise<Project | null>;
    update(id: number, dto: UpdateProjectDto): Promise<Project>;
    remove(id: number): Promise<void>;
}
