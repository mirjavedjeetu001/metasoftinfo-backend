import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity()
export class HeroSection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 500 })
  title: string;

  @Column({ type: 'varchar', length: 1000 })
  subtitle: string;

  @Column({ type: 'varchar', length: 100 })
  primaryCta: string;

  @Column({ type: 'varchar', length: 255, default: '/contact' })
  primaryCtaLink: string;

  @Column({ type: 'varchar', length: 100 })
  secondaryCta: string;

  @Column({ type: 'varchar', length: 255, default: '/contact' })
  secondaryCtaLink: string;

  @Column({ type: 'int', default: 120 })
  stat1Value: number;

  @Column({ type: 'varchar', length: 100 })
  stat1Label: string;

  @Column({ type: 'int', default: 18 })
  stat2Value: number;

  @Column({ type: 'varchar', length: 100 })
  stat2Label: string;

  @Column({ type: 'int', default: 98 })
  stat3Value: number;

  @Column({ type: 'varchar', length: 100 })
  stat3Label: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  updatedBy: string;
}
