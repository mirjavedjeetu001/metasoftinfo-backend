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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroSection = void 0;
const typeorm_1 = require("typeorm");
let HeroSection = class HeroSection {
    id;
    title;
    subtitle;
    primaryCta;
    primaryCtaLink;
    secondaryCta;
    secondaryCtaLink;
    stat1Value;
    stat1Label;
    stat2Value;
    stat2Label;
    stat3Value;
    stat3Label;
    updatedAt;
    updatedBy;
};
exports.HeroSection = HeroSection;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HeroSection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], HeroSection.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], HeroSection.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HeroSection.prototype, "primaryCta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: '/contact' }),
    __metadata("design:type", String)
], HeroSection.prototype, "primaryCtaLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HeroSection.prototype, "secondaryCta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: '/contact' }),
    __metadata("design:type", String)
], HeroSection.prototype, "secondaryCtaLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 120 }),
    __metadata("design:type", Number)
], HeroSection.prototype, "stat1Value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HeroSection.prototype, "stat1Label", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 18 }),
    __metadata("design:type", Number)
], HeroSection.prototype, "stat2Value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HeroSection.prototype, "stat2Label", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 98 }),
    __metadata("design:type", Number)
], HeroSection.prototype, "stat3Value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], HeroSection.prototype, "stat3Label", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], HeroSection.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], HeroSection.prototype, "updatedBy", void 0);
exports.HeroSection = HeroSection = __decorate([
    (0, typeorm_1.Entity)()
], HeroSection);
//# sourceMappingURL=hero-section.entity.js.map