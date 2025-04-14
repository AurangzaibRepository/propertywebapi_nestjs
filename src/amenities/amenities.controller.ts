import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { AmenitiesService } from './amenities.service';
import { Amenity } from './amenity.model';
import { AmenityExistsPipe } from './pipes/amenity-exists.pipe';
import { CreateAmenityDto } from './dto/create-amenity.dto';

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
    @Param('id', ParseIntPipe, AmenityExistsPipe) id: number,
  ): Promise<Amenity | string> {
    const data = await this.amenitiesService.getDetails(id);

    return data ?? 'Amenity not found';
  }

  @Post()
  async create(@Body() createAmenityDto: CreateAmenityDto): Promise<string> {
    await this.amenitiesService.save(createAmenityDto);

    return 'Amenity created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, AmenityExistsPipe) id: number,
    @Body() updateAmenityDto: CreateAmenityDto,
  ): Promise<string> {
    await this.amenitiesService.update(id, updateAmenityDto);

    return 'Amenity updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, AmenityExistsPipe) id: number,
  ): Promise<string> {
    await this.amenitiesService.delete(id);

    return 'Amenity deleted successfully';
  }
}
