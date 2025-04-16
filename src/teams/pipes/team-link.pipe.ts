import { PipeTransform, BadRequestException } from '@nestjs/common';
import { PropertiesService } from 'src/properties/properties.service';

export class TeamLinkPipe implements PipeTransform {
  constructor(private propertiesService: PropertiesService) {}

  async transform(value: number) {
    // Check if property is linked with team
    const property = await this.propertiesService.getByAttribute(
      'TeamId',
      value,
    );

    if (property) {
      throw new BadRequestException('Team is linked with Property');
    }

    return value;
  }
}
