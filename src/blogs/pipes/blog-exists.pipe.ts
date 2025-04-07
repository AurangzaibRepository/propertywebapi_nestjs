import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from '../blog.model';

export class BlogExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Blog)
    private blog: typeof Blog,
  ) {}

  async transform(value: number) {
    const data = await this.blog.findByPk(value);

    if (!data) {
      throw new BadRequestException('Blog not found');
    }

    return value;
  }
}
