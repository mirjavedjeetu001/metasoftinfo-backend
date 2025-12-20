import { CanActivate, ExecutionContext } from '@nestjs/common';
import 'reflect-metadata';
import { UserRole } from '../users/user.entity';
export declare class RoleGuard implements CanActivate {
    private allowedRoles;
    constructor(allowedRoles: UserRole[]);
    canActivate(context: ExecutionContext): boolean;
}
export declare function Roles(...roles: UserRole[]): (target: any, key?: string, descriptor?: PropertyDescriptor) => void;
