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
exports.ThemeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const theme_settings_entity_1 = require("./theme-settings.entity");
let ThemeService = class ThemeService {
    themeRepo;
    constructor(themeRepo) {
        this.themeRepo = themeRepo;
    }
    async ensureSettings() {
        const current = await this.themeRepo.findOne({ where: { id: 1 } });
        if (current)
            return current;
        const created = this.themeRepo.create({ id: 1 });
        return this.themeRepo.save(created);
    }
    async getSettings() {
        return this.ensureSettings();
    }
    async updateSettings(dto) {
        const settings = await this.ensureSettings();
        Object.assign(settings, dto);
        return this.themeRepo.save(settings);
    }
};
exports.ThemeService = ThemeService;
exports.ThemeService = ThemeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(theme_settings_entity_1.ThemeSettings)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ThemeService);
//# sourceMappingURL=theme.service.js.map