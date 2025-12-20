import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import 'reflect-metadata';
import { UserRole } from '../users/user.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private allowedRoles: UserRole[]) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('No user');
    }

    if (!this.allowedRoles.includes(user.role)) {
      throw new ForbiddenException('Insufficient role');
    }

    return true;
  }
}

export function Roles(...roles: UserRole[]) {
  return (target: any, key?: string, descriptor?: PropertyDescriptor) => {
    Reflect.defineMetadata('roles', roles, descriptor?.value || target);
  };
}
