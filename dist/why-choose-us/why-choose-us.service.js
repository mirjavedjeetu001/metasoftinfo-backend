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
exports.WhyChooseUsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const why_choose_us_entity_1 = require("./why-choose-us.entity");
let WhyChooseUsService = class WhyChooseUsService {
    whyRepository;
    constructor(whyRepository) {
        this.whyRepository = whyRepository;
    }
    async getAll() {
        const items = await this.whyRepository.find({ order: { order: 'ASC' } });
        if (items.length === 0) {
            const defaults = [
                { order: 1, title: 'Expert Team', description: 'Senior developers with 10+ years experience' },
                { order: 2, title: 'Agile Process', description: 'Fast iteration, quick results, full transparency' },
                { order: 3, title: 'Proven Track Record', description: '120+ shipped projects across industries' },
                { order: 4, title: 'Modern Tech', description: 'Latest frameworks, tools, and best practices' },
            ];
            for (const d of defaults) {
                await this.whyRepository.save(d);
            }
            return this.whyRepository.find({ order: { order: 'ASC' } });
        }
        return items;
    }
    async create(data) {
        const item = this.whyRepository.create(data);
        return this.whyRepository.save(item);
    }
    async update(id, data) {
        await this.whyRepository.update(id, data);
        const updated = await this.whyRepository.findOneBy({ id });
        if (!updated)
            throw new Error('Item not found');
        return updated;
    }
    async delete(id) {
        await this.whyRepository.delete(id);
    }
};
exports.WhyChooseUsService = WhyChooseUsService;
exports.WhyChooseUsService = WhyChooseUsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(why_choose_us_entity_1.WhyChooseUs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WhyChooseUsService);
//# sourceMappingURL=why-choose-us.service.js.map