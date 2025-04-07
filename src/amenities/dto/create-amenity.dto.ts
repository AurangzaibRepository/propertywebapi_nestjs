import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateAmenityDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 5, {
    message: 'Code must be between 1 and 5 characters long',
  })
  code: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
