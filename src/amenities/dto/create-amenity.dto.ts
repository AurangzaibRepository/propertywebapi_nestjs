import { IsNotEmpty, MaxLength, Validate } from 'class-validator';
import { AmenityCodeExists } from '../validator-constraints/amenity-code-exists.constraint';

export class CreateAmenityDto {
  //@Validate(AmenityCodeExists) 
  @MaxLength(5, {
    message: 'Code cannot be greater than 5 characters',
  }) 
  // Define here as decorators are executed in reverse order
  @IsNotEmpty({
    message: 'Code is required',
  }) 
  code: string;

  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string; 
}
