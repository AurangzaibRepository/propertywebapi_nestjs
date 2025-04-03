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
import { BlogCategoryExistsPipe } from './pipes/blog-category-exists.pipe';

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
    @Param('id', ParseIntPipe, BlogCategoryExistsPipe) id: number,
  ): Promise<BlogCategory | string> {
    const category = await this.blogCategoryService.getDetails(id);

    return category ?? 'Blog category not found';
  }

  @Delete('id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe, BlogCategoryExistsPipe) id: number): Promise<string> {
    await this.blogCategoryService.delete(id);

    return 'Blog category deleted successfully';
  }
}
