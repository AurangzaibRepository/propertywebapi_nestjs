import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BlogCategory } from '../blog-category.model';

export class BlogCategoryExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(BlogCategory)
    private blogCategory: typeof BlogCategory,
  ) {}

  async transform(value: number) {
    const data = await this.blogCategory.findByPk(value);

    if (!data) {
      throw new BadRequestException('Blog category not found');
    }

    return value;
  }
}
