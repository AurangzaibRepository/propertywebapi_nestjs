import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.model';
import { BlogExistsPipe } from './pipes/blog-exists.pipe';
import { CreateBlogDto } from './dto/create-blog.dto';

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
  async details(
    @Param('id', ParseIntPipe, BlogExistsPipe) id: number,
  ): Promise<Blog | string> {
    const blog = await this.blogsService.getDetails(id);

    return blog ?? 'Blog not found';
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto): Promise<string> {
    await this.blogsService.save(createBlogDto);

    return 'Blog created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, BlogExistsPipe) id: number,
    @Body() updateBlogDto: CreateBlogDto,
  ): Promise<string> {
    await this.blogsService.update(id, updateBlogDto);

    return 'Blog updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, BlogExistsPipe) id: number,
  ): Promise<string> {
    await this.blogsService.delete(id);

    return 'Blog deleted successfully';
  }
}
