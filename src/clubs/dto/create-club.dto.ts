import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateClubDto {
  @IsString()
  @Length(1, 80, {
    message: 'Title must be between 1 and 80 characters long',
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @Length(1, 100, {
    message: 'Image must be between 1 and 100 characters long',
  })
  image: string;

  @IsNotEmpty()
  @IsString()
  activities: string;
}
