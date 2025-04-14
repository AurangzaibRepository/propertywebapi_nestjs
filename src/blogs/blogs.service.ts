import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Logger } from '../logger/logger.service';
import { FormatService } from '../helpers/format.service';
import { Blog } from './blog.model';
import { BlogInterface } from './interfaces/blog.interface';

@Injectable()
export class BlogsService {
  constructor(
    private logger: Logger,
    private formatService: FormatService,
    @InjectModel(Blog)
    private blog: typeof Blog,
  ) {
    this.logger.setContext('Blogs Module');
  }

  async getAll(): Promise<Blog[]> {
    const data = await this.blog.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getListing(pageNumber: number): Promise<Blog[]> {
    // Logging test
    this.logger.log(`Loading page number ${pageNumber}`);
    const [limit, offset]: number[] =
      this.formatService.getLimitOffset(pageNumber);

    const data = await this.blog.findAll({
      limit,
      offset,
    });

    return data;
  }

  async getDetails(id: number): Promise<Blog | null> {
    const blog = await this.blog.findByPk(id);

    return blog ?? null;
  }

  async save(data: BlogInterface) {
    await this.blog.create(data);
  }

  async update(id: number, data: BlogInterface) {
    await this.blog.update(data, {
      where: { id }
    });
  })

  async delete(id: number) {
    await this.blog.destroy({
      where: { id },
    });
  }
}
