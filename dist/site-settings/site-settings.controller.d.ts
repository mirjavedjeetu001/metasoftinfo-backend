import { SiteSettingsService } from './site-settings.service';
import { SiteSettings } from './site-settings.entity';
export declare class SiteSettingsController {
    private settingsService;
    constructor(settingsService: SiteSettingsService);
    getSettings(): Promise<SiteSettings>;
    updateSettings(data: Partial<SiteSettings>): Promise<SiteSettings>;
}
