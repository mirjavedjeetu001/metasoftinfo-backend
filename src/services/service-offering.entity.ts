import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'service_offerings' })
export class ServiceOffering {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ length: 255 })
  summary: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  iconKey?: string;

  @Column({ nullable: true })
  category?: string;

  @Column({ default: false })
  featured: boolean;

  @Column({ type: 'int', default: 0 })
  displayOrder: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
