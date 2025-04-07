import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateBlogCategoryDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100, {
    message: 'Blog name must be 1 and 100 characters long',
  })
  name: string;
}
