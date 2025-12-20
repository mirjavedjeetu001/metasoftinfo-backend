import { UserRole } from '../user.entity';
export declare class UpdateUserDto {
    email?: string;
    fullName?: string;
    password?: string;
    role?: UserRole;
}
