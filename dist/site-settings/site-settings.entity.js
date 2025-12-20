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
exports.SiteSettings = void 0;
const typeorm_1 = require("typeorm");
let SiteSettings = class SiteSettings {
    id;
    siteName;
    siteDescription;
    footerText;
    companyEmail;
    companyPhone;
    companyAddress;
    socialFacebook;
    socialLinkedin;
    socialTwitter;
    logoUrl;
    navbarBgColor;
    navbarTextColor;
    preloaderEnabled;
    preloaderText;
    preloaderDuration;
    updatedAt;
    updatedBy;
};
exports.SiteSettings = SiteSettings;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SiteSettings.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], SiteSettings.prototype, "siteName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], SiteSettings.prototype, "siteDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "footerText", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "companyEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "companyPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "companyAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "socialFacebook", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "socialLinkedin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "socialTwitter", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "logoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: '#1e293b' }),
    __metadata("design:type", String)
], SiteSettings.prototype, "navbarBgColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: '#ffffff' }),
    __metadata("design:type", String)
], SiteSettings.prototype, "navbarTextColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], SiteSettings.prototype, "preloaderEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, default: 'Metasoft Info' }),
    __metadata("design:type", String)
], SiteSettings.prototype, "preloaderText", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 2000 }),
    __metadata("design:type", Number)
], SiteSettings.prototype, "preloaderDuration", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SiteSettings.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "updatedBy", void 0);
exports.SiteSettings = SiteSettings = __decorate([
    (0, typeorm_1.Entity)()
], SiteSettings);
//# sourceMappingURL=site-settings.entity.js.map