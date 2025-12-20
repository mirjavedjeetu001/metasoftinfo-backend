import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'testimonials' })
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column({ nullable: true })
  clientTitle?: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'int', default: 5 })
  rating: number;

  @Column({ nullable: true })
  avatarUrl?: string;

  @Column({ nullable: true })
  company?: string;

  @Column({ type: 'int', default: 0 })
  displayOrder: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
