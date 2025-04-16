import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogCategory } from './blog-category.model';
import { BlogCategoriesService } from './blog-categories.service';
import { BlogCategoriesController } from './blog-categories.controller';
import { BlogsModule } from 'src/blogs/blogs.module';

@Module({
  imports: [BlogsModule, SequelizeModule.forFeature([BlogCategory])],
  providers: [BlogCategoriesService],
  controllers: [BlogCategoriesController]
})
export class BlogCategoriesModule {}
