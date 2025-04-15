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
import { LocationsService } from './locations.service';
import { Location } from './location.model';
import { LocationExistsPipe } from './pipes/location-exists.pipe';
import { LocationLinkPipe } from './pipes/location-link.pipe';
import { CreateLocationDto } from './dto/create-location.dto';

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

  @Post()
  async create(@Body() createLocationDto: CreateLocationDto): Promise<string> {
    await this.locationsService.save(createLocationDto);

    return 'Location created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, LocationExistsPipe) id: number,
    @Body() updateLocationDto: CreateLocationDto,
  ): Promise<string> {
    await this.locationsService.update(id, updateLocationDto);

    return 'Location updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, LocationExistsPipe, LocationLinkPipe) id: number,
  ): Promise<string> {
    await this.locationsService.delete(id);

    return 'Location deleted successfully';
  }
}
