import { Repository } from 'typeorm';
import { NavbarMenu } from './navbar-menu.entity';
export declare class NavbarService {
    private readonly menuRepo;
    constructor(menuRepo: Repository<NavbarMenu>);
    getAll(): Promise<NavbarMenu[]>;
    create(data: Partial<NavbarMenu>): Promise<NavbarMenu>;
    update(id: string, data: Partial<NavbarMenu>): Promise<NavbarMenu | null>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    seedDefaultMenu(): Promise<{
        message: string;
        items?: undefined;
    } | {
        message: string;
        items: NavbarMenu[];
    }>;
}
