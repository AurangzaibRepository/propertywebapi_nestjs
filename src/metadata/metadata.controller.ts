import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { Metadata } from './metadata.model';
import { PageValidationPipe } from 'src/faqs/pipes/page-validation.pipe';
import { CreateMetadataDto } from './dto/create-metadata.dto';

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

  @Put(':page')
  async update(
    @Param('page', PageValidationPipe) page: string,
    @Body() createMetadataDto: CreateMetadataDto,
  ): Promise<string> {
    await this.metadataService.update(page, createMetadataDto);

    return 'Metadata updated successfully';
  }
}
