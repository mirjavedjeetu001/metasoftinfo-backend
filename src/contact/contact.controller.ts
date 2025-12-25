import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, NotFoundException } from '@nestjs/common';
import { ContactService } from './contact.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // Public endpoint for form submission
  @Post('submit')
  async submitForm(@Body() data: any) {
    return this.contactService.createSubmission(data);
  }

  // Admin endpoints
  @UseGuards(JwtAuthGuard)
  @Get('submissions')
  async getAllSubmissions() {
    return this.contactService.getAllSubmissions();
  }

  @UseGuards(JwtAuthGuard)
  @Put('submissions/:id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    const result = await this.contactService.updateSubmissionStatus(+id, status);
    if (!result) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('submissions/:id')
  async deleteSubmission(@Param('id') id: string) {
    await this.contactService.deleteSubmission(+id);
    return { message: 'Submission deleted successfully' };
  }

  // Contact settings
  @Get('settings')
  async getSettings() {
    return this.contactService.getSettings();
  }

  @UseGuards(JwtAuthGuard)
  @Put('settings')
  async updateSettings(@Body() data: any) {
    return this.contactService.updateSettings(data);
  }
}
