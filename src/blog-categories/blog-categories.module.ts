import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogCategory } from './blog-category.model';
import { BlogCategoriesService } from './blog-categories.service';

@Module({
  imports: [SequelizeModule.forFeature([BlogCategory])],
  providers: [BlogCategoriesService],
})
export class BlogCategoriesModule {}
