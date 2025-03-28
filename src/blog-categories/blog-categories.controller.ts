import {
  Controller,
  Get,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogCategoriesService } from './blog-categories.service';
import { BlogCategory } from './blog-category.model';

@Controller('blog-categories')
export class BlogCategoriesController {
  constructor(private blogCategoryService: BlogCategoriesService) {}

  @Get()
  async all(): Promise<BlogCategory[]> {
    const data = await this.blogCategoryService.getAll();

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<BlogCategory | string> {
    const category = await this.blogCategoryService.getDetails(id);

    return category ?? 'Blog category not found';
  }

  @Delete('id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.blogCategoryService.delete(id);

    return 'Blog category deleted successfully';
  }
}
