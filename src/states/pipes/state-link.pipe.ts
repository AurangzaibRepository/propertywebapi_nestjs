import { PipeTransform, BadRequestException } from '@nestjs/common';
import { LocationsService } from 'src/locations/locations.service';

export class StateLinkPipe implements PipeTransform {
  constructor(private locationsService: LocationsService) {}

  async transform(value: number) {
    // Check if state is linked with location
    const location = await this.locationsService.getByAttribute(
      'StateId',
      value,
    );

    if (location) {
      throw new BadRequestException('State is linked with location');
    }

    return value;
  }
}
