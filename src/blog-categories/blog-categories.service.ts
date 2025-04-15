import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BlogCategory } from './blog-category.model';
import { BlogCategoryInterface } from './interfaces/blog-category.interface';

@Injectable()
export class BlogCategoriesService {
  constructor(
    @InjectModel(BlogCategory)
    private blogCategory: typeof BlogCategory,
  ) {}

  async getAll(): Promise<BlogCategory[]> {
    const data = await this.blogCategory.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getDetails(id: number): Promise<BlogCategory | null> {
    const category = await this.blogCategory.findByPk(id);

    return category ?? null;
  }

  async save(data: BlogCategoryInterface) {
    await this.blogCategory.create(data as Partial<BlogCategory>);
  }

  async update(id: number, data: BlogCategoryInterface) {
    await this.blogCategory.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.blogCategory.destroy({
      where: { id },
    });
  }
}
