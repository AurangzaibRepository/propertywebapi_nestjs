import { IsNotEmpty, IsString, Length, IsEnum, IsInt } from 'class-validator';
import { STATUS } from 'src/enums/blogs.enum';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  caption: string;

  @IsString()
  @IsNotEmpty()
  picture: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @Length(1, 20, {
    message: 'Slug must be between 1 and 20 characters long',
  })
  slug: string;

  @IsEnum(STATUS, {
    message: 'Invalid status value',
  })
  status: STATUS;

  @IsString()
  @Length(1, 150, {
    message: 'Metadata title must be between 1 and 150 characters long',
  })
  metadata_title: string;

  @IsString()
  @Length(1, 700, {
    message: 'Metadata description must be between 1 and 700 characters long',
  })
  metadata_description: string;

  @IsString()
  @IsNotEmpty()
  metadata_focus_keyword: string;

  @IsString()
  @Length(1, 500, {
    message: 'Metadata canonical URL must be between 1 and 500 characters long',
  })
  metadata_canonical_url: string;

  @IsString()
  @IsNotEmpty()
  metadata_schema: string;

  @IsInt()
  @IsNotEmpty()
  BlogCategoryId: number;
}
