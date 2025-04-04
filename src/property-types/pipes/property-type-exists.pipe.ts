import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PropertyType } from '../property-type.model';

export class PropertyTypeExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(PropertyType)
    private propertyType: typeof PropertyType,
  ) {}

  async transform(value: number) {
    const data = await this.propertyType.findByPk(value);

    if (!data) {
      throw new BadRequestException('Property type not found');
    }

    return value;
  }
}
