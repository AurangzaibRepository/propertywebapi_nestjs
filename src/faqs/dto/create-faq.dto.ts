import { IsString, IsNotEmpty, Length, IsEnum } from 'class-validator';
import { PAGES } from 'src/enums/common.enum';

export class CreateFAQDto {
  @IsString()
  @Length(1, 500, {
    message: 'Question must be between 1 and 500 characters long',
  })
  question: string;

  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsEnum(PAGES, {
    message: 'Invalid page',
  })
  page: PAGES;
}
