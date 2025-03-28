import { Controller, Get, Param } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { Metadata } from './metadata.model';
import { PageValidationPipe } from 'src/faqs/pipes/page-validation.pipe';

@Controller('metadata')
export class MetadataController {
  constructor(private metadataService: MetadataService) {}

  @Get(':page')
  async details(
    @Param('page', PageValidationPipe) page: string,
  ): Promise<Metadata | string> {
    const data = await this.metadataService.getByPage(page);

    return data ?? 'Metadata not found';
  }
}
