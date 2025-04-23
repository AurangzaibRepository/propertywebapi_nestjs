import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';
import { AmenitiesService } from './amenities.service';
import { Amenity } from './amenity.model';
import { AmenityExistsPipe } from './pipes/amenity-exists.pipe';
import { IntPipe } from 'src/helpers/pipes/int-pipe.pipe';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { AmenityLinkPipe } from './pipes/amenity-link.pipe';

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
    @Param('id', IntPipe, AmenityExistsPipe)
    id: number,
  ): Promise<Amenity | null> {
    const data = await this.amenitiesService.getDetails(id);

    return data;
  }

  @Post()
  async create(@Body() createAmenityDto: CreateAmenityDto): Promise<object> {
    //await this.amenitiesService.save(createAmenityDto);

    return {
      message: 'Amenity created successfully',
      statusCode: 201,
    };
  }

  @Put(':id')
  async update(
    @Param('id', IntPipe, AmenityExistsPipe) id: number,
    @Body() updateAmenityDto: CreateAmenityDto,
  ): Promise<string> {
    await this.amenitiesService.update(id, updateAmenityDto);

    return 'Amenity updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', IntPipe, AmenityExistsPipe, AmenityLinkPipe) id: number,
  ): Promise<string> {
    await this.amenitiesService.delete(id);

    return 'Amenity deleted successfully';
  }
}
