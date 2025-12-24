"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const services_module_1 = require("./services/services.module");
const projects_module_1 = require("./projects/projects.module");
const testimonials_module_1 = require("./testimonials/testimonials.module");
const theme_module_1 = require("./theme/theme.module");
const hero_module_1 = require("./hero/hero.module");
const process_module_1 = require("./process/process.module");
const why_choose_us_module_1 = require("./why-choose-us/why-choose-us.module");
const site_settings_module_1 = require("./site-settings/site-settings.module");
const navbar_module_1 = require("./navbar/navbar.module");
const pages_module_1 = require("./pages/pages.module");
const partners_module_1 = require("./partners/partners.module");
const team_module_1 = require("./team/team.module");
const user_entity_1 = require("./users/user.entity");
const service_offering_entity_1 = require("./services/service-offering.entity");
const project_entity_1 = require("./projects/project.entity");
const testimonial_entity_1 = require("./testimonials/testimonial.entity");
const theme_settings_entity_1 = require("./theme/theme-settings.entity");
const hero_section_entity_1 = require("./hero/hero-section.entity");
const hero_slide_entity_1 = require("./hero/hero-slide.entity");
const process_step_entity_1 = require("./process/process-step.entity");
const why_choose_us_entity_1 = require("./why-choose-us/why-choose-us.entity");
const site_settings_entity_1 = require("./site-settings/site-settings.entity");
const navbar_menu_entity_1 = require("./navbar/navbar-menu.entity");
const page_entity_1 = require("./pages/page.entity");
const partner_entity_1 = require("./partners/partner.entity");
const team_member_entity_1 = require("./team/team-member.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    type: 'mysql',
                    host: config.get('DATABASE_HOST', 'localhost'),
                    port: Number(config.get('DATABASE_PORT', '3306')),
                    username: config.get('DATABASE_USER', 'root'),
                    password: config.get('DATABASE_PASSWORD', ''),
                    database: config.get('DATABASE_NAME', 'metasoftinfo'),
                    entities: [user_entity_1.User, service_offering_entity_1.ServiceOffering, project_entity_1.Project, testimonial_entity_1.Testimonial, theme_settings_entity_1.ThemeSettings, hero_section_entity_1.HeroSection, hero_slide_entity_1.HeroSlide, process_step_entity_1.ProcessStep, why_choose_us_entity_1.WhyChooseUs, site_settings_entity_1.SiteSettings, navbar_menu_entity_1.NavbarMenu, page_entity_1.Page, partner_entity_1.Partner, team_member_entity_1.TeamMember],
                    synchronize: config.get('DATABASE_SYNCHRONIZE', false),
                    migrationsRun: config.get('DATABASE_MIGRATIONS_RUN', false),
                    extra: {
                        connectionLimit: 10,
                        waitForConnections: true,
                        queueLimit: 0,
                        connectTimeout: 60000,
                        acquireTimeout: 60000,
                    },
                    retryAttempts: 3,
                    retryDelay: 3000,
                    autoLoadEntities: true,
                    keepConnectionAlive: true,
                    logging: config.get('DATABASE_LOGGING', false),
                }),
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            services_module_1.ServicesModule,
            projects_module_1.ProjectsModule,
            testimonials_module_1.TestimonialsModule,
            theme_module_1.ThemeModule,
            hero_module_1.HeroModule,
            process_module_1.ProcessModule,
            why_choose_us_module_1.WhyChooseUsModule,
            site_settings_module_1.SiteSettingsModule,
            navbar_module_1.NavbarModule,
            pages_module_1.PagesModule,
            partners_module_1.PartnersModule,
            team_module_1.TeamModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map