import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'theme_settings' })
export class ThemeSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '#0A84FF' })
  primaryColor: string;

  @Column({ default: '#111827' })
  secondaryColor: string;

  @Column({ default: '#F59E0B' })
  accentColor: string;

  @Column({ default: '#F3F4F6' })
  surfaceColor: string;

  @Column({ default: '#0B1021' })
  neutralColor: string;

  @Column({ default: false })
  darkMode: boolean;

  @Column({ nullable: true })
  updatedBy?: string;

  @UpdateDateColumn()
  updatedAt: Date;
}
