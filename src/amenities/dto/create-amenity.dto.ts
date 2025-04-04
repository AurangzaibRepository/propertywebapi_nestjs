import { IsString, Length } from 'class-validator';

export class CreateAmenityDto {
  @IsString()
  @Length(1, 5, {
    message: 'Code must be between 1 and 5 characters long',
  })
  code: string;

  @IsString()
  name: string;
}
