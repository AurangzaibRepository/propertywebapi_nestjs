import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt({
    message: 'StateId must be an integer',
  })
  @IsNotEmpty()
  StateId: number;
}
