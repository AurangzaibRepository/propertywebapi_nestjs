import {
  Controller,
  Get,
  Delete,
  Param,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.model';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  async all(): Promise<Blog[]> {
    const data = await this.blogsService.getAll();

    return data;
  }

  @Get('listing/:pageNumber')
  async listing(
    @Param('pageNumber', ParseIntPipe) pageNumber: number,
  ): Promise<Blog[]> {
    const data = await this.blogsService.getListing(pageNumber);

    return data;
  }

  @Get(':id')
  async details(@Param('id', ParseIntPipe) id: number): Promise<Blog | string> {
    const blog = await this.blogsService.getDetails(id);

    return blog ?? 'Blog not found';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.blogsService.delete(id);

    return 'Blog deleted successfully';
  }
}
