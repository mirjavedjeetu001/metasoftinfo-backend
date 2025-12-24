import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamMember } from './team-member.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamMember)
    private teamMemberRepository: Repository<TeamMember>,
  ) {}

  async findAll(): Promise<TeamMember[]> {
    return this.teamMemberRepository.find({
      where: { isActive: true },
      order: { displayOrder: 'ASC', createdAt: 'DESC' },
    });
  }

  async findByCategory(category: string): Promise<TeamMember[]> {
    return this.teamMemberRepository.find({
      where: { category, isActive: true },
      order: { displayOrder: 'ASC', createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<TeamMember | null> {
    return this.teamMemberRepository.findOne({ where: { id } });
  }

  async create(teamMemberData: Partial<TeamMember>): Promise<TeamMember> {
    const teamMember = this.teamMemberRepository.create(teamMemberData);
    return this.teamMemberRepository.save(teamMember);
  }

  async update(id: number, teamMemberData: Partial<TeamMember>): Promise<TeamMember | null> {
    await this.teamMemberRepository.update(id, teamMemberData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.teamMemberRepository.delete(id);
  }

  async getCategories(): Promise<string[]> {
    const result = await this.teamMemberRepository
      .createQueryBuilder('team')
      .select('DISTINCT team.category', 'category')
      .where('team.isActive = :isActive', { isActive: true })
      .getRawMany();
    
    return result.map(r => r.category);
  }
}
