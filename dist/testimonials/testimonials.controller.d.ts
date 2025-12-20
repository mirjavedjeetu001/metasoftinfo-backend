import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
export declare class TestimonialsController {
    private readonly testimonialsService;
    constructor(testimonialsService: TestimonialsService);
    findAll(): Promise<import("./testimonial.entity").Testimonial[]>;
    findOne(id: number): Promise<import("./testimonial.entity").Testimonial>;
    create(dto: CreateTestimonialDto, req: any): Promise<import("./testimonial.entity").Testimonial>;
    update(id: number, dto: UpdateTestimonialDto, req: any): Promise<import("./testimonial.entity").Testimonial>;
    remove(id: number, req: any): Promise<void>;
}
