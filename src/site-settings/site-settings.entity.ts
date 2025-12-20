import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity()
export class SiteSettings {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  siteName: string;

  @Column({ type: 'varchar', length: 500 })
  siteDescription: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  footerText: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  companyEmail: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  companyPhone: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  companyAddress: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  socialFacebook: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  socialLinkedin: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  socialTwitter: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  logoUrl: string;

  @Column({ type: 'varchar', length: 50, default: '#1e293b' })
  navbarBgColor: string;

  @Column({ type: 'varchar', length: 50, default: '#ffffff' })
  navbarTextColor: string;

  @Column({ type: 'boolean', default: true })
  preloaderEnabled: boolean;

  @Column({ type: 'varchar', length: 200, default: 'Metasoft Info' })
  preloaderText: string;

  @Column({ type: 'int', default: 2000 })
  preloaderDuration: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  updatedBy: string;
}
