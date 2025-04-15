import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from '../../blogs/blog.model';

export class BlogCategoryLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(Blog)
    private blog: typeof Blog,
  ) {}

  async transform(value: number) {
    // Check if blog is linked with this category
    const blog = await this.blog.findOne({
      where: { BlogCategoryId: value },
    });

    if (blog) {
      throw new BadRequestException('Blog category is linked with blog');
    }

    return value;
  }
}
