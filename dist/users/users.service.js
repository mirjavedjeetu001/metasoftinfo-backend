"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("./user.entity");
let UsersService = class UsersService {
    usersRepo;
    constructor(usersRepo) {
        this.usersRepo = usersRepo;
    }
    async onModuleInit() {
        const email = process.env.ADMIN_DEFAULT_EMAIL || 'admin@metasoftinfo.com';
        const password = process.env.ADMIN_DEFAULT_PASSWORD || 'ChangeMe123!';
        const existing = await this.usersRepo.findOne({ where: { email } });
        if (!existing) {
            const passwordHash = await bcrypt.hash(password, 10);
            const admin = this.usersRepo.create({
                email,
                fullName: 'Super Admin',
                passwordHash,
                role: user_entity_1.UserRole.SUPER_ADMIN,
            });
            await this.usersRepo.save(admin);
            console.log(`Seeded default admin ${email}`);
        }
    }
    async create(dto) {
        const existing = await this.usersRepo.findOne({ where: { email: dto.email } });
        if (existing) {
            throw new common_1.BadRequestException('User with this email already exists');
        }
        const passwordHash = await bcrypt.hash(dto.password, 10);
        const user = this.usersRepo.create({
            email: dto.email,
            fullName: dto.fullName,
            role: dto.role ?? user_entity_1.UserRole.ADMIN,
            passwordHash,
        });
        return this.usersRepo.save(user);
    }
    findAll() {
        return this.usersRepo.find();
    }
    findByEmail(email) {
        return this.usersRepo.findOne({ where: { email } });
    }
    findOne(id) {
        return this.usersRepo.findOne({ where: { id } });
    }
    async update(id, dto) {
        const user = await this.findOne(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        if (dto.email)
            user.email = dto.email;
        if (dto.fullName)
            user.fullName = dto.fullName;
        if (dto.role)
            user.role = dto.role;
        if (dto.password)
            user.passwordHash = await bcrypt.hash(dto.password, 10);
        return this.usersRepo.save(user);
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        await this.usersRepo.remove(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map