export declare enum UserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    EDITOR = "EDITOR"
}
export declare class User {
    id: number;
    email: string;
    passwordHash: string;
    fullName?: string;
    role: UserRole;
    avatarUrl?: string;
    lastLoginAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
