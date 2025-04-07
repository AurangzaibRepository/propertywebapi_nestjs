import { IsString, Length } from 'class-validator';

export class CreateLanguageDto {
  @IsString()
  @Length(1, 10, {
    message: 'Code must be between 1 and 10 characters long',
  })
  code: string;

  @IsString()
  @Length(1, 100, {
    message: 'Name must be between 1 and 100 characters long',
  })
  name: string;
}
