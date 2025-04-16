import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BlogsService } from 'src/blogs/blogs.service';

export class BlogCategoryLinkPipe implements PipeTransform {
  constructor(private blogsService: BlogsService) {}

  async transform(value: number) {
    // Check if blog is linked with this category
    const blog = await this.blogsService.getByAttribute(
      'BlogCategoryId',
      value,
    );

    if (blog) {
      throw new BadRequestException('Blog category is linked with blog');
    }

    return value;
  }
}
