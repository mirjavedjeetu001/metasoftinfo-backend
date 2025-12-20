"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const navbar_menu_entity_1 = require("./navbar-menu.entity");
const navbar_controller_1 = require("./navbar.controller");
const navbar_service_1 = require("./navbar.service");
let NavbarModule = class NavbarModule {
};
exports.NavbarModule = NavbarModule;
exports.NavbarModule = NavbarModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([navbar_menu_entity_1.NavbarMenu])],
        controllers: [navbar_controller_1.NavbarController],
        providers: [navbar_service_1.NavbarService],
        exports: [navbar_service_1.NavbarService],
    })
], NavbarModule);
//# sourceMappingURL=navbar.module.js.map