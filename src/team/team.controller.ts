import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamMember } from './team-member.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  findAll(): Promise<TeamMember[]> {
    return this.teamService.findAll();
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: string): Promise<TeamMember[]> {
    return this.teamService.findByCategory(category);
  }

  @Get('categories')
  getCategories(): Promise<string[]> {
    return this.teamService.getCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TeamMember | null> {
    return this.teamService.findOne(+id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() teamMemberData: Partial<TeamMember>): Promise<TeamMember> {
    return this.teamService.create(teamMemberData);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() teamMemberData: Partial<TeamMember>,
  ): Promise<TeamMember | null> {
    return this.teamService.update(+id, teamMemberData);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string): Promise<void> {
    return this.teamService.delete(+id);
  }
}
