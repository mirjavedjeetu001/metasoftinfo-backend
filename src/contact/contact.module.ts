import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactSubmission } from './contact-submission.entity';
import { ContactSettings } from './contact-settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactSubmission, ContactSettings])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
