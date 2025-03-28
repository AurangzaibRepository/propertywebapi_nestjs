import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BlogCategory } from './blog-category.model';

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

  async delete(id: number) {
    await this.blogCategory.destroy({
      where: { id },
    });
  }
}
