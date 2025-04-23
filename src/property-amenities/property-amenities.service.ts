import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PropertyAmenity } from './property-amenity.model';

@Injectable()
export class PropertyAmenitiesService {
  constructor(
    @InjectModel(PropertyAmenity)
    private propertyAmenity: typeof PropertyAmenity,
  ) {}

  async getByAttribute(
    attribute: string,
    value: any,
  ): Promise<PropertyAmenity | null> {
    const data = await this.propertyAmenity.findOne({
      where: { [attribute]: value },
    });

    return data;
  }
}
