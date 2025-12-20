import { Body, Controller, ForbiddenException, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Get()
  getTheme() {
    return this.themeService.getSettings();
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  updateTheme(@Body() dto: UpdateThemeDto, @Req() req: any) {
    if (req.user.role !== 'SUPER_ADMIN') throw new ForbiddenException('Only super admins can update theme');
    return this.themeService.updateSettings(dto);
  }
}
