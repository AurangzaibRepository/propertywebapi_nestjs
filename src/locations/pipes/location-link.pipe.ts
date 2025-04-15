import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from 'src/properties/property.model';

export class LocationLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(Property)
    private property: typeof Property,
  ) {}

  async transform(value: number) {
    // Check if location is linked with property
    const property = await this.property.findOne({
      where: { LocationId: value },
    });

    if (property) {
      throw new BadRequestException('Location is linked with proeprty');
    }

    return value;
  }
}
