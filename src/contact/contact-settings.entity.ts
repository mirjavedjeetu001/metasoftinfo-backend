import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('contact_settings')
export class ContactSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'info@metasoftinfo.com' })
  email: string;

  @Column({ default: '+1 (234) 567-890' })
  phone: string;

  @Column({ default: '123 Business St, Suite 100' })
  addressLine1: string;

  @Column({ default: 'San Francisco, CA 94107' })
  addressLine2: string;

  @Column({ default: 'Monday - Friday: 9:00 AM - 6:00 PM' })
  businessHours1: string;

  @Column({ default: 'Saturday: 10:00 AM - 4:00 PM' })
  businessHours2: string;

  @Column({ default: 'Sunday: Closed' })
  businessHours3: string;

  @Column({ default: 'Let us Build Something Great Together' })
  heroTitle: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  heroSubtitle: string;

  @Column({ default: 'Get In Touch' })
  sectionTitle: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  sectionDescription: string;
}
