import { Controller, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { PropertyTypesService } from './property-types.service';
import { PropertyType } from 'src/property-types/property-type.model';

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
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PropertyType | string> {
    const data = await this.propertyTypesService.getDetails(id);

    return data ?? 'Property type not found';
  }
}
