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
exports.PagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const page_entity_1 = require("./page.entity");
let PagesService = class PagesService {
    pageRepo;
    constructor(pageRepo) {
        this.pageRepo = pageRepo;
    }
    async getAll() {
        return this.pageRepo.find({ order: { updatedAt: 'DESC' } });
    }
    async getBySlug(slug) {
        return this.pageRepo.findOne({ where: { slug, isPublished: true } });
    }
    async create(data) {
        const page = this.pageRepo.create(data);
        return this.pageRepo.save(page);
    }
    async update(id, data) {
        await this.pageRepo.update(id, data);
        return this.pageRepo.findOne({ where: { id } });
    }
    async delete(id) {
        return this.pageRepo.delete(id);
    }
    async seedDefaultPages() {
        const existingPages = await this.pageRepo.count();
        if (existingPages > 0) {
            return { message: 'Pages already exist, skipping seed' };
        }
        const defaultPages = [
            {
                title: 'About Us',
                slug: 'about-us',
                content: `<div class="max-w-4xl mx-auto py-16 px-4">
  <h1 class="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
  <p class="text-lg text-gray-700 mb-4">We are a leading technology company dedicated to delivering innovative solutions that transform businesses.</p>
  <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
  <p class="text-gray-700 mb-4">To empower businesses with cutting-edge technology solutions that drive growth and success.</p>
  <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
  <ul class="list-disc list-inside text-gray-700 space-y-2">
    <li>Innovation and Excellence</li>
    <li>Customer-First Approach</li>
    <li>Integrity and Transparency</li>
    <li>Continuous Learning</li>
  </ul>
</div>`,
                isPublished: true,
            },
        ];
        const created = [];
        for (const pageData of defaultPages) {
            const page = this.pageRepo.create(pageData);
            const saved = await this.pageRepo.save(page);
            created.push(saved);
        }
        return { message: 'Default pages created successfully', pages: created };
    }
};
exports.PagesService = PagesService;
exports.PagesService = PagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(page_entity_1.Page)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PagesService);
//# sourceMappingURL=pages.service.js.map