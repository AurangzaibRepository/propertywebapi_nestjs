import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from 'src/properties/property.model';

export class PropertyTypeLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(Property)
    private property: typeof Property,
  ) {}

  async transform(value: number) {
    // Check if property type is linked with property
    const property = await this.property.findOne({
      where: { PropertyTypeId: value },
    });

    if (property) {
      throw new BadRequestException('Property type is linked with property');
    }

    return value;
  }
}
