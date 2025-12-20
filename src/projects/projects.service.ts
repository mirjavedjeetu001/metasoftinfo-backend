import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private readonly projectsRepo: Repository<Project>,
  ) {}

  create(dto: CreateProjectDto) {
    const entity = this.projectsRepo.create({
      ...dto,
      publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : undefined,
    });
    return this.projectsRepo.save(entity);
  }

  findAll() {
    return this.projectsRepo.find({ order: { displayOrder: 'ASC' } });
  }

  async findOne(id: number) {
    const project = await this.projectsRepo.findOne({ where: { id } });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  findBySlug(slug: string) {
    return this.projectsRepo.findOne({ where: { slug } });
  }

  async update(id: number, dto: UpdateProjectDto) {
    const project = await this.findOne(id);
    Object.assign(project, {
      ...dto,
      publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : project.publishedAt,
    });
    return this.projectsRepo.save(project);
  }

  async remove(id: number) {
    const project = await this.findOne(id);
    await this.projectsRepo.remove(project);
  }
}
