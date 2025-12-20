import { NavbarService } from './navbar.service';
import { NavbarMenu } from './navbar-menu.entity';
export declare class NavbarController {
    private readonly navbarService;
    constructor(navbarService: NavbarService);
    getAll(): Promise<NavbarMenu[]>;
    create(data: Partial<NavbarMenu>): Promise<NavbarMenu>;
    seedDefaults(): Promise<{
        message: string;
        items?: undefined;
    } | {
        message: string;
        items: NavbarMenu[];
    }>;
    update(id: string, data: Partial<NavbarMenu>): Promise<NavbarMenu | null>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
