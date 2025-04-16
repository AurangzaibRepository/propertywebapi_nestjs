import { PipeTransform, BadRequestException } from '@nestjs/common';
import { PropertiesService } from 'src/properties/properties.service';

export class LocationLinkPipe implements PipeTransform {
  constructor(private propertiesService: PropertiesService) {}

  async transform(value: number) {
    // Check if location is linked with property
    const property = await this.propertiesService.getByAttribute(
      'LocationId',
      'value',
    );

    if (property) {
      throw new BadRequestException('Location is linked with property');
    }

    return value;
  }
}
