import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { ProjectsModule } from './projects/projects.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { ThemeModule } from './theme/theme.module';
import { HeroModule } from './hero/hero.module';
import { ProcessModule } from './process/process.module';
import { WhyChooseUsModule } from './why-choose-us/why-choose-us.module';
import { SiteSettingsModule } from './site-settings/site-settings.module';
import { NavbarModule } from './navbar/navbar.module';
import { PagesModule } from './pages/pages.module';
import { PartnersModule } from './partners/partners.module';
import { TeamModule } from './team/team.module';
import { ContactModule } from './contact/contact.module';
import { User } from './users/user.entity';
import { ServiceOffering } from './services/service-offering.entity';
import { Project } from './projects/project.entity';
import { Testimonial } from './testimonials/testimonial.entity';
import { ThemeSettings } from './theme/theme-settings.entity';
import { HeroSection } from './hero/hero-section.entity';
import { HeroSlide } from './hero/hero-slide.entity';
import { ProcessStep } from './process/process-step.entity';
import { WhyChooseUs } from './why-choose-us/why-choose-us.entity';
import { SiteSettings } from './site-settings/site-settings.entity';
import { NavbarMenu } from './navbar/navbar-menu.entity';
import { Page } from './pages/page.entity';
import { Partner } from './partners/partner.entity';
import { TeamMember } from './team/team-member.entity';
import { ContactSubmission } from './contact/contact-submission.entity';
import { ContactSettings } from './contact/contact-settings.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DATABASE_HOST', 'localhost'),
        port: Number(config.get<string>('DATABASE_PORT', '3306')),
        username: config.get<string>('DATABASE_USER', 'root'),
        password: config.get<string>('DATABASE_PASSWORD', ''),
        database: config.get<string>('DATABASE_NAME', 'metasoftinfo'),
        entities: [User, ServiceOffering, Project, Testimonial, ThemeSettings, HeroSection, HeroSlide, ProcessStep, WhyChooseUs, SiteSettings, NavbarMenu, Page, Partner, TeamMember, ContactSubmission, ContactSettings],
        synchronize: config.get<boolean>('DATABASE_SYNCHRONIZE', false),
        migrationsRun: config.get<boolean>('DATABASE_MIGRATIONS_RUN', false),
        // Connection pool configuration - critical for preventing 503 errors
        extra: {
          connectionLimit: 10, // Max connections in pool (adjust based on cPanel limits)
          waitForConnections: true,
          queueLimit: 0,
          connectTimeout: 60000, // 60 seconds
          acquireTimeout: 60000,
        },
        // Retry logic for failed connections
        retryAttempts: 3,
        retryDelay: 3000,
        // Auto-reconnect on connection loss
        autoLoadEntities: true,
        keepConnectionAlive: true,
        // Logging for debugging (disable in production)
        logging: config.get<boolean>('DATABASE_LOGGING', false),
      }),
    }),
    UsersModule,
    AuthModule,
    ServicesModule,
    ProjectsModule,
    TestimonialsModule,
    ThemeModule,
    HeroModule,
    ProcessModule,
    WhyChooseUsModule,
    SiteSettingsModule,
    NavbarModule,
    PagesModule,
    PartnersModule,
    TeamModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
