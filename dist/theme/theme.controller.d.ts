import { ThemeService } from './theme.service';
import { UpdateThemeDto } from './dto/update-theme.dto';
export declare class ThemeController {
    private readonly themeService;
    constructor(themeService: ThemeService);
    getTheme(): Promise<import("./theme-settings.entity").ThemeSettings>;
    updateTheme(dto: UpdateThemeDto, req: any): Promise<import("./theme-settings.entity").ThemeSettings>;
}
