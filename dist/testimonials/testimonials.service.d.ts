import { Repository } from 'typeorm';
import { Testimonial } from './testimonial.entity';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
export declare class TestimonialsService {
    private readonly testimonialsRepo;
    constructor(testimonialsRepo: Repository<Testimonial>);
    create(dto: CreateTestimonialDto): Promise<Testimonial>;
    findAll(): Promise<Testimonial[]>;
    findOne(id: number): Promise<Testimonial>;
    update(id: number, dto: UpdateTestimonialDto): Promise<Testimonial>;
    remove(id: number): Promise<void>;
}
