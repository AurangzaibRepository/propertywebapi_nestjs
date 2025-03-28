import {
  Controller,
  Get,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { Partner } from './partner.model';

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
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Partner | string> {
    const data = await this.partnersService.getDetails(id);

    return data ?? 'Partner not found';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.partnersService.delete(id);

    return 'Partner deleted successfully';
  }
}
