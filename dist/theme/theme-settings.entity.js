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
exports.ThemeSettings = void 0;
const typeorm_1 = require("typeorm");
let ThemeSettings = class ThemeSettings {
    id;
    primaryColor;
    secondaryColor;
    accentColor;
    surfaceColor;
    neutralColor;
    darkMode;
    updatedBy;
    updatedAt;
};
exports.ThemeSettings = ThemeSettings;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ThemeSettings.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '#0A84FF' }),
    __metadata("design:type", String)
], ThemeSettings.prototype, "primaryColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '#111827' }),
    __metadata("design:type", String)
], ThemeSettings.prototype, "secondaryColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '#F59E0B' }),
    __metadata("design:type", String)
], ThemeSettings.prototype, "accentColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '#F3F4F6' }),
    __metadata("design:type", String)
], ThemeSettings.prototype, "surfaceColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '#0B1021' }),
    __metadata("design:type", String)
], ThemeSettings.prototype, "neutralColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ThemeSettings.prototype, "darkMode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ThemeSettings.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ThemeSettings.prototype, "updatedAt", void 0);
exports.ThemeSettings = ThemeSettings = __decorate([
    (0, typeorm_1.Entity)({ name: 'theme_settings' })
], ThemeSettings);
//# sourceMappingURL=theme-settings.entity.js.map