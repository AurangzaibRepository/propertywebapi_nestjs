import { PipeTransform, BadRequestException } from '@nestjs/common';
import { PropertiesService } from 'src/properties/properties.service';

export class PropertyTypeLinkPipe implements PipeTransform {
  constructor(private propertiesService: PropertiesService) {}

  async transform(value: number) {
    // Check if property type is linked with property
    const property = await this.propertiesService.getByAttribute(
      'PropertyTypeId',
      value,
    );

    if (property) {
      throw new BadRequestException('Property type is linked with property');
    }

    return value;
  }
}
