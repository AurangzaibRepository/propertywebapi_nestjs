import { PipeTransform, BadRequestException } from '@nestjs/common';
import { PropertyAmenitiesService } from 'src/property-amenities/property-amenities.service';

export class AmenityLinkPipe implements PipeTransform {
  constructor(private propertyAmenitiesService: PropertyAmenitiesService) {}

  async transform(value: number) {
    // Check if amenity is linked with property
    const propertyAmenity = await this.propertyAmenitiesService.getByAttribute(
      'AmenityId',
      value,
    );

    if (propertyAmenity) {
      throw new BadRequestException('Amenity is linked with property');
    }

    return value;
  }
}
