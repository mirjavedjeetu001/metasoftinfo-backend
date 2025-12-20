import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity('pages')
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200, unique: true })
  slug: string; // URL path like "about-us", "contact"

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'text' })
  content: string; // HTML content

  @Column({ type: 'varchar', length: 500, nullable: true })
  metaDescription: string;

  @Column({ type: 'boolean', default: true })
  isPublished: boolean;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'varchar', length: 200, nullable: true })
  updatedBy: string;
}
