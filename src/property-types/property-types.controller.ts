import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { PropertyTypesService } from './property-types.service';
import { PropertyType } from 'src/property-types/property-type.model';
import { PropertyTypeExistsPipe } from './pipes/property-type-exists.pipe';
import { PropertyTypeLinkPipe } from './pipes/property-type-link.pipe';
import { CreatePropertyTypeDto } from './dto/create-property-type.dto';

@Controller('property-types')
export class PropertyTypesController {
  constructor(private propertyTypesService: PropertyTypesService) {}

  @Get()
  async all(): Promise<PropertyType[]> {
    const data = await this.propertyTypesService.getAll();

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, PropertyTypeExistsPipe) id: number,
  ): Promise<PropertyType | string> {
    const data = await this.propertyTypesService.getDetails(id);

    return data ?? 'Property type not found';
  }

  @Post()
  async create(
    @Body() createPropertyTypeDto: CreatePropertyTypeDto,
  ): Promise<string> {
    await this.propertyTypesService.save(createPropertyTypeDto);

    return 'Property type created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, PropertyTypeExistsPipe) id: number,
    @Body() updatePropertyTypeDto: CreatePropertyTypeDto,
  ): Promise<string> {
    await this.propertyTypesService.update(id, updatePropertyTypeDto);

    return 'Property type updated sucessfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, PropertyTypeExistsPipe, PropertyTypeLinkPipe)
    id: number,
  ): Promise<string> {
    await this.propertyTypesService.delete(id);

    return 'Property type deleted successfully';
  }
}
