import { Injectable } from '@nestjs/common';

@Injectable()
export class FormatService {
  getLimitOffset(pageNumber: number): number[] {
    const pageSize: number = parseInt(process.env.PAGE_SIZE || '10');
    const offset = pageNumber * pageSize - pageSize;

    return [pageSize, offset];
  }
}
