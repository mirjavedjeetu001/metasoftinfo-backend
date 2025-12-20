import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from './page.entity';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private readonly pageRepo: Repository<Page>,
  ) {}

  async getAll() {
    return this.pageRepo.find({ order: { updatedAt: 'DESC' } });
  }

  async getBySlug(slug: string) {
    return this.pageRepo.findOne({ where: { slug, isPublished: true } });
  }

  async create(data: Partial<Page>) {
    const page = this.pageRepo.create(data);
    return this.pageRepo.save(page);
  }

  async update(id: string, data: Partial<Page>) {
    await this.pageRepo.update(id, data);
    return this.pageRepo.findOne({ where: { id } });
  }

  async delete(id: string) {
    return this.pageRepo.delete(id);
  }

  async seedDefaultPages() {
    const existingPages = await this.pageRepo.count();
    if (existingPages > 0) {
      return { message: 'Pages already exist, skipping seed' };
    }

    const defaultPages = [
      {
        title: 'About Us',
        slug: 'about-us',
        content: `<div class="max-w-4xl mx-auto py-16 px-4">
  <h1 class="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
  <p class="text-lg text-gray-700 mb-4">We are a leading technology company dedicated to delivering innovative solutions that transform businesses.</p>
  <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
  <p class="text-gray-700 mb-4">To empower businesses with cutting-edge technology solutions that drive growth and success.</p>
  <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
  <ul class="list-disc list-inside text-gray-700 space-y-2">
    <li>Innovation and Excellence</li>
    <li>Customer-First Approach</li>
    <li>Integrity and Transparency</li>
    <li>Continuous Learning</li>
  </ul>
</div>`,
        isPublished: true,
      },
    ];

    const created: Page[] = [];
    for (const pageData of defaultPages) {
      const page = this.pageRepo.create(pageData);
      const saved = await this.pageRepo.save(page);
      created.push(saved);
    }

    return { message: 'Default pages created successfully', pages: created };
  }
}
