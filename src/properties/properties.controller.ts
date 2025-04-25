import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Property } from './property.model';
import { IntPipe } from 'src/helpers/pipes/int-pipe.pipe';
import { PropertyExistsPipe } from './pipes/property-exists.pipe';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Get(':pageNumber')
  async listing(
    @Param('pageNumber', IntPipe) pageNumber: number,
  ): Promise<Property[]> {
    const data = await this.propertiesService.getListing(pageNumber);

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', IntPipe, PropertyExistsPipe) id: number,
  ): Promise<Property | string> {
    const data = await this.propertiesService.getDetails(id);

    return data ?? 'Property not found';
  }

  @Post()
  async create(@Body() createPropertyDto: CreatePropertyDto): Promise<string> {
    await this.propertiesService.save(createPropertyDto);

    return 'Property created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', IntPipe, PropertyExistsPipe) id: number,
    @Body() updatePropertyDto: CreatePropertyDto,
  ): Promise<string> {
    await this.propertiesService.update(id, updatePropertyDto);

    return 'Property updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', IntPipe, PropertyExistsPipe) id: number,
  ): Promise<string> {
    await this.propertiesService.delete(id);

    return 'Property deleted successfully';
  }
}
