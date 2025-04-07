import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PropertyTypesService } from './property-types.service';
import { PropertyType } from 'src/property-types/property-type.model';
import { PropertyTypeExistsPipe } from './pipes/property-type-exists.pipe';

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
}
