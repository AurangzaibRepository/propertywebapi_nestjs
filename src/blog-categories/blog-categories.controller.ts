import {
  Controller,
  Get,
  Post,
  Delete,
  HttpCode,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogCategoriesService } from './blog-categories.service';
import { BlogCategory } from './blog-category.model';
import { BlogCategoryExistsPipe } from './pipes/blog-category-exists.pipe';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';

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

  @Post()
  async create(
    @Body() createBlogCategoryDto: CreateBlogCategoryDto,
  ): Promise<string> {
    await this.blogCategoryService.save(createBlogCategoryDto);

    return 'Blog category created successfully';
  }

  @Delete('id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, BlogCategoryExistsPipe) id: number,
  ): Promise<string> {
    await this.blogCategoryService.delete(id);

    return 'Blog category deleted successfully';
  }
}
