import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  getHello(): string {
    return 'MetaSoft Backend API - Running';
  }

  async checkDatabase(): Promise<boolean> {
    try {
      await this.connection.query('SELECT 1');
      return true;
    } catch (error) {
      console.error('Database health check failed:', error);
      throw error;
    }
  }
}
