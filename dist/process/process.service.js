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
exports.ProcessService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const process_step_entity_1 = require("./process-step.entity");
let ProcessService = class ProcessService {
    processRepository;
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async getAll() {
        const steps = await this.processRepository.find({ order: { order: 'ASC' } });
        if (steps.length === 0) {
            const defaults = [
                { order: 1, title: 'AI-Powered Discovery Audit', description: 'Free 60-min strategy session to analyze your tech stack' },
                { order: 2, title: 'Hybrid Team Onboarding', description: 'Match with vetted engineers (800+ experts)' },
                { order: 3, title: 'Build with AI Guardrails', description: 'AI pair-programming assistants (70% faster dev)' },
                { order: 4, title: 'Scale with Confidence', description: 'AI-optimized cloud deployment' },
            ];
            for (const d of defaults) {
                await this.processRepository.save(d);
            }
            return this.processRepository.find({ order: { order: 'ASC' } });
        }
        return steps;
    }
    async create(data) {
        const step = this.processRepository.create(data);
        return this.processRepository.save(step);
    }
    async update(id, data) {
        await this.processRepository.update(id, data);
        const updated = await this.processRepository.findOneBy({ id });
        if (!updated)
            throw new Error('Process step not found');
        return updated;
    }
    async delete(id) {
        await this.processRepository.delete(id);
    }
};
exports.ProcessService = ProcessService;
exports.ProcessService = ProcessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(process_step_entity_1.ProcessStep)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProcessService);
//# sourceMappingURL=process.service.js.map