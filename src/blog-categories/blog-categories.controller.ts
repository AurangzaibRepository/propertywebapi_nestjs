import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body
} from '@nestjs/common';
import { BlogCategoriesService } from './blog-categories.service';
import { BlogCategory } from './blog-category.model';
import { BlogCategoryExistsPipe } from './pipes/blog-category-exists.pipe';
import { BlogCategoryLinkPipe } from './pipes/blog-category-link.pipe';
import { IntPipe } from 'src/helpers/pipes/int-pipe.pipe';
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
    @Param('id', IntPipe, BlogCategoryExistsPipe) id: number,
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

  @Put(':id')
  async update(
    @Param('id', IntPipe, BlogCategoryExistsPipe)
    id: number,
    @Body() updateBlogCategortDto: CreateBlogCategoryDto,
  ): Promise<string> {
    await this.blogCategoryService.update(id, updateBlogCategortDto);

    return 'Blog category updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', IntPipe, BlogCategoryExistsPipe, BlogCategoryLinkPipe)
    id: number,
  ): Promise<string> {
    await this.blogCategoryService.delete(id);

    return 'Blog category deleted successfully';
  }
}
