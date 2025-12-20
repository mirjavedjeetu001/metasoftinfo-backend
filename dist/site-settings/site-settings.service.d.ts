import { Repository } from 'typeorm';
import { SiteSettings } from './site-settings.entity';
export declare class SiteSettingsService {
    private settingsRepository;
    constructor(settingsRepository: Repository<SiteSettings>);
    getSettings(): Promise<SiteSettings>;
    updateSettings(data: Partial<SiteSettings>): Promise<SiteSettings>;
}
