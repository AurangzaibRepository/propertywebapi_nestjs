import { IsString, Length } from 'class-validator';

export class CreateStateDto {
  @IsString()
  @Length(1, 200, {
    message: 'Name must be between 1 and 200 characters long',
  })
  name: string;
}
