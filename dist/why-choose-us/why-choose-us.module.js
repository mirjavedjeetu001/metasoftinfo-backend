"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhyChooseUsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const why_choose_us_entity_1 = require("./why-choose-us.entity");
const why_choose_us_controller_1 = require("./why-choose-us.controller");
const why_choose_us_service_1 = require("./why-choose-us.service");
let WhyChooseUsModule = class WhyChooseUsModule {
};
exports.WhyChooseUsModule = WhyChooseUsModule;
exports.WhyChooseUsModule = WhyChooseUsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([why_choose_us_entity_1.WhyChooseUs])],
        controllers: [why_choose_us_controller_1.WhyChooseUsController],
        providers: [why_choose_us_service_1.WhyChooseUsService],
        exports: [why_choose_us_service_1.WhyChooseUsService],
    })
], WhyChooseUsModule);
//# sourceMappingURL=why-choose-us.module.js.map