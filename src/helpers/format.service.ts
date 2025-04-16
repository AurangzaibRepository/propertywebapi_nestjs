import { Injectable } from '@nestjs/common';
import { APIResponseDto } from './dto/api-response.dto';
import { MessageType } from './dto/api-response.dto';

@Injectable()
export class FormatService {
  getLimitOffset(pageNumber: number): number[] {
    const pageSize: number = parseInt(process.env.PAGE_SIZE || '10');
    const offset = pageNumber * pageSize - pageSize;

    return [pageSize, offset];
  }

  generateResponse<T>(
    statusCode: number,
    messages: MessageType[] | [],
    data?: any,
  ): APIResponseDto<T> {
    return {
      statusCode,
      messages,
      data,
    };
  }
}
