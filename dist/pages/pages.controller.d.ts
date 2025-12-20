import { PagesService } from './pages.service';
import { Page } from './page.entity';
export declare class PagesController {
    private readonly pagesService;
    constructor(pagesService: PagesService);
    getAll(): Promise<Page[]>;
    getBySlug(slug: string): Promise<Page | null>;
    create(data: Partial<Page>): Promise<Page>;
    seedDefaults(): Promise<{
        message: string;
        pages?: undefined;
    } | {
        message: string;
        pages: Page[];
    }>;
    update(id: string, data: Partial<Page>): Promise<Page | null>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
