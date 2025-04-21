import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body
} from '@nestjs/common';
import { IntPipe } from 'src/helpers/pipes/int-pipe.pipe';
import { PageValidationPipe } from './pipes/page-validation.pipe';
import { FAQExistsPipe } from './pipes/faq-exists.pipe';
import { FaqsService } from './faqs.service';
import { FAQ } from './faq.model';
import { CreateFAQDto } from './dto/create-faq.dto';

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
    @Param('id', IntPipe, FAQExistsPipe) id: number,
  ): Promise<FAQ | string> {
    const data = await this.faqsService.getDetails(id);

    return data ?? 'FAQ not found';
  }

  @Post()
  async create(@Body() createFAQDto: CreateFAQDto): Promise<string> {
    await this.faqsService.save(createFAQDto);

    return 'FAQ created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', IntPipe, FAQExistsPipe) id: number,
    @Body() updateFAQDto: CreateFAQDto,
  ): Promise<string> {
    await this.faqsService.update(id, updateFAQDto);

    return 'FAQ updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', IntPipe, FAQExistsPipe) id: number,
  ): Promise<string> {
    await this.faqsService.delete(id);

    return 'Faq deleted successfully';
  }
}
