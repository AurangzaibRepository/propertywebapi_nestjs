import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { Partner } from './partner.model';
import { PartnerExistsPipe } from './pipes/partner-exists.pipe';
import { CreatePartnerDto } from './dto/create-partner.dto';

@Controller('partners')
export class PartnersController {
  constructor(private partnersService: PartnersService) {}

  @Get()
  async all(): Promise<Partner[]> {
    const data = await this.partnersService.getAll();

    return data;
  }

  @Get('listing/:pageNumber')
  async listing(
    @Param('pageNumber', ParseIntPipe) pageNumber: number,
  ): Promise<Partner[]> {
    const data = await this.partnersService.getListing(pageNumber);

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, PartnerExistsPipe) id: number,
  ): Promise<Partner | string> {
    const data = await this.partnersService.getDetails(id);

    return data ?? 'Partner not found';
  }

  @Post()
  async create(@Body() createPartnerDto: CreatePartnerDto): Promise<string> {
    await this.partnersService.save(createPartnerDto);

    return 'Partner created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, PartnerExistsPipe) id: number,
    @Body() updatePartnerDto: CreatePartnerDto,
  ): Promise<string> {
    await this.partnersService.update(id, updatePartnerDto);

    return 'Partner updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, PartnerExistsPipe) id: number,
  ): Promise<string> {
    await this.partnersService.delete(id);

    return 'Partner deleted successfully';
  }
}
