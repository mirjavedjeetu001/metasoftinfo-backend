import { Repository } from 'typeorm';
import { ThemeSettings } from './theme-settings.entity';
import { UpdateThemeDto } from './dto/update-theme.dto';
export declare class ThemeService {
    private readonly themeRepo;
    constructor(themeRepo: Repository<ThemeSettings>);
    ensureSettings(): Promise<ThemeSettings>;
    getSettings(): Promise<ThemeSettings>;
    updateSettings(dto: UpdateThemeDto): Promise<ThemeSettings>;
}
