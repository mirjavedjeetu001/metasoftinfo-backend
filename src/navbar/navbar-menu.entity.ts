import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity('navbar_menu')
export class NavbarMenu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  order: number;

  @Column({ type: 'varchar', length: 100 })
  label: string;

  @Column({ type: 'varchar', length: 200 })
  path: string; // e.g., /about, /contact, /services

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  openInNewTab: boolean;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'varchar', length: 200, nullable: true })
  updatedBy: string;
}
