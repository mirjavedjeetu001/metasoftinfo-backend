import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NavbarMenu } from './navbar-menu.entity';

@Injectable()
export class NavbarService {
  constructor(
    @InjectRepository(NavbarMenu)
    private readonly menuRepo: Repository<NavbarMenu>,
  ) {}

  async getAll() {
    return this.menuRepo.find({
      where: { isActive: true },
      order: { order: 'ASC' },
    });
  }

  async create(data: Partial<NavbarMenu>) {
    const item = this.menuRepo.create(data);
    return this.menuRepo.save(item);
  }

  async update(id: string, data: Partial<NavbarMenu>) {
    await this.menuRepo.update(id, data);
    return this.menuRepo.findOne({ where: { id } });
  }

  async delete(id: string) {
    return this.menuRepo.delete(id);
  }

  async seedDefaultMenu() {
    const existingItems = await this.menuRepo.count();
    if (existingItems > 0) {
      return { message: 'Menu items already exist, skipping seed' };
    }

    const defaultMenu = [
      { label: 'About Us', path: '/page/about-us', order: 1, isActive: true },
      { label: 'Services', path: '/services', order: 2, isActive: true },
      { label: 'Projects', path: '/projects', order: 3, isActive: true },
      { label: 'Testimonials', path: '/testimonials', order: 4, isActive: true },
    ];

    const created: NavbarMenu[] = [];
    for (const menuData of defaultMenu) {
      const item = this.menuRepo.create(menuData);
      const saved = await this.menuRepo.save(item);
      created.push(saved);
    }

    return { message: 'Default menu items created successfully', items: created };
  }
}
