import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { PAGES } from 'src/enums/common.enum';

@Injectable()
export class PageValidationPipe implements PipeTransform {
  transform(value: string) {
    if (!isNaN(parseInt(value))) {
      return new BadRequestException('Invalid page');
    }

    // Check if value does not exist in pages enum
    if (!Object.values(PAGES).includes(value as PAGES)) {
      return new BadRequestException('Invalid page');
    }

    return value;
  }
}
