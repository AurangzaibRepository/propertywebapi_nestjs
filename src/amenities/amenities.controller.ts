import {
  Controller,
  Get,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AmenitiesService } from './amenities.service';
import { Amenity } from './amenity.model';

@Controller('amenities')
export class AmenitiesController {
  constructor(private amenitiesService: AmenitiesService) {}

  @Get()
  async all(): Promise<Amenity[]> {
    const data = await this.amenitiesService.getAll();

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Amenity | string> {
    const data = await this.amenitiesService.getDetails(id);

    return data ?? 'Amenity not found';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.amenitiesService.delete(id);

    return 'Amenity deleted successfully';
  }
}
