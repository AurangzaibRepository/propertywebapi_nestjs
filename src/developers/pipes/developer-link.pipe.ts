import { PipeTransform, BadRequestException } from '@nestjs/common';
import { PropertiesService } from 'src/properties/properties.service';

export class DeveloperLinkPipe implements PipeTransform {
  constructor(private propertiesService: PropertiesService) {}

  async transform(value: number) {
    // Check if developer is linked with property
    const property = await this.propertiesService.getByAttribute(
      'DeveloperId',
      value,
    );

    if (property) {
      throw new BadRequestException('Developer is linked with property');
    }

    return value;
  }
}
