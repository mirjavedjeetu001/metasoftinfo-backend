"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const navbar_menu_entity_1 = require("./navbar-menu.entity");
let NavbarService = class NavbarService {
    menuRepo;
    constructor(menuRepo) {
        this.menuRepo = menuRepo;
    }
    async getAll() {
        return this.menuRepo.find({
            where: { isActive: true },
            order: { order: 'ASC' },
        });
    }
    async create(data) {
        const item = this.menuRepo.create(data);
        return this.menuRepo.save(item);
    }
    async update(id, data) {
        await this.menuRepo.update(id, data);
        return this.menuRepo.findOne({ where: { id } });
    }
    async delete(id) {
        return this.menuRepo.delete(id);
    }
    async seedDefaultMenu() {
        const existingItems = await this.menuRepo.count();
        if (existingItems > 0) {
            return { message: 'Menu items already exist, skipping seed' };
        }
        const defaultMenu = [
            { label: 'About Us', path: '/page/about-us', order: 1, isActive: true },
            { label: 'Services', path: '/services', order: 2, isActive: true },
            { label: 'Projects', path: '/projects', order: 3, isActive: true },
            { label: 'Testimonials', path: '/testimonials', order: 4, isActive: true },
        ];
        const created = [];
        for (const menuData of defaultMenu) {
            const item = this.menuRepo.create(menuData);
            const saved = await this.menuRepo.save(item);
            created.push(saved);
        }
        return { message: 'Default menu items created successfully', items: created };
    }
};
exports.NavbarService = NavbarService;
exports.NavbarService = NavbarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(navbar_menu_entity_1.NavbarMenu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NavbarService);
//# sourceMappingURL=navbar.service.js.map