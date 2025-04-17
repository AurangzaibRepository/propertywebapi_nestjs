import { PipeTransform, BadRequestException, ArgumentMetadata } from '@nestjs/common';

export class IntPipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    if (isNaN(value)) {
      throw new BadRequestException(`${metadata.data} must be numeric`);
    } 

    return value;  
  }
}
