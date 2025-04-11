import { IsString, Length } from 'class-validator';

export class CreateDeveloperDto {
  @IsString()
  @Length(1, 100, {
    message: 'Name must be between 1 and 100 characters',
  })
  name: string;

  @IsString()
  @Length(1, 700, {
    message: 'Description must be between 1 and 700 characters',
  })
  description: string;

  @IsString()
  @Length(1, 200, {
    message: 'Picture must be between 1 and 200 characters',
  })
  picture: string;
}
