import {
  Controller,
  Get,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Location } from './location.model';
import { LocationExistsPipe } from './pipes/location-exists.pipe';

@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @Get()
  async all(): Promise<Location[]> {
    const data = await this.locationsService.getAll();

    return data;
  }

  @Get('listing/:pageNumber')
  async listing(
    @Param('pageNumber', ParseIntPipe) pageNumber: number,
  ): Promise<Location[]> {
    const data = await this.locationsService.getListing(pageNumber);

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, LocationExistsPipe) id: number,
  ): Promise<Location | string> {
    const data = await this.locationsService.getDetails(id);

    return data ?? 'Location not found';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, LocationExistsPipe) id: number,
  ): Promise<string> {
    await this.locationsService.delete(id);

    return 'Location deleted successfully';
  }
}
