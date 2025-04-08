import { IsString, Length } from 'class-validator';

export class CreatePropertyTypeDto {
  @IsString()
  @Length(1, 100, {
    message: 'Name must be between 1 and 100 characters long',
  })
  name: string;
}
