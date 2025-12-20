import { Repository } from 'typeorm';
import { Page } from './page.entity';
export declare class PagesService {
    private readonly pageRepo;
    constructor(pageRepo: Repository<Page>);
    getAll(): Promise<Page[]>;
    getBySlug(slug: string): Promise<Page | null>;
    create(data: Partial<Page>): Promise<Page>;
    update(id: string, data: Partial<Page>): Promise<Page | null>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    seedDefaultPages(): Promise<{
        message: string;
        pages?: undefined;
    } | {
        message: string;
        pages: Page[];
    }>;
}
