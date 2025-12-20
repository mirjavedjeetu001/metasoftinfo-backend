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
exports.WhyChooseUsController = void 0;
const common_1 = require("@nestjs/common");
const why_choose_us_service_1 = require("./why-choose-us.service");
const super_admin_guard_1 = require("../auth/super-admin.guard");
let WhyChooseUsController = class WhyChooseUsController {
    whyService;
    constructor(whyService) {
        this.whyService = whyService;
    }
    async getAll() {
        return this.whyService.getAll();
    }
    async create(data) {
        return this.whyService.create(data);
    }
    async update(id, data) {
        return this.whyService.update(id, data);
    }
    async delete(id) {
        return this.whyService.delete(id);
    }
};
exports.WhyChooseUsController = WhyChooseUsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WhyChooseUsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(super_admin_guard_1.SuperAdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WhyChooseUsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(super_admin_guard_1.SuperAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WhyChooseUsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(super_admin_guard_1.SuperAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WhyChooseUsController.prototype, "delete", null);
exports.WhyChooseUsController = WhyChooseUsController = __decorate([
    (0, common_1.Controller)('api/why-choose-us'),
    __metadata("design:paramtypes", [why_choose_us_service_1.WhyChooseUsService])
], WhyChooseUsController);
//# sourceMappingURL=why-choose-us.controller.js.map