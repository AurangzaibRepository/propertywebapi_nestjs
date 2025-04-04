import {
  Controller,
  Get,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PageValidationPipe } from './pipes/page-validation.pipe';
import { FAQExistsPipe } from './pipes/faq-exists.pipe';
import { FaqsService } from './faqs.service';
import { FAQ } from './faq.model';

@Controller('faqs')
export class FaqsController {
  constructor(private faqsService: FaqsService) {}

  @Get('all/:page')
  async all(@Param('page', PageValidationPipe) page: string): Promise<FAQ[]> {
    const data = await this.faqsService.getAll(page);

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, FAQExistsPipe) id: number,
  ): Promise<FAQ | string> {
    const data = await this.faqsService.getDetails(id);

    return data ?? 'FAQ not found';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, FAQExistsPipe) id: number,
  ): Promise<string> {
    await this.faqsService.delete(id);

    return 'Faq deleted successfully';
  }
}
