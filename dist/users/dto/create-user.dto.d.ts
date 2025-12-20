import { UserRole } from '../user.entity';
export declare class CreateUserDto {
    email: string;
    password: string;
    fullName?: string;
    role?: UserRole;
}
