import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
export declare class SuperAdminGuard extends JwtAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
