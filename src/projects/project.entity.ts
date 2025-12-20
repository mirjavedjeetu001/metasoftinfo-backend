import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column({ length: 255 })
  summary: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ nullable: true })
  coverImage?: string;

  @Column({ nullable: true })
  tags?: string;

  @Column({ nullable: true })
  liveUrl?: string;

  @Column({ nullable: true })
  repoUrl?: string;

  @Column({ type: 'int', default: 0 })
  displayOrder: number;

  @Column({ type: 'datetime', nullable: true })
  publishedAt?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
