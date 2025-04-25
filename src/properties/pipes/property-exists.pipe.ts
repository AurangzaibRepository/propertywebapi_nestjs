import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from '../property.model';

export class PropertyExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Property)
    private property: typeof Property,
  ) {}

  async transform(value: number) {
    const data = await this.property.findByPk(value);

    if (!data) {
      throw new BadRequestException('Property not found');
    }

    return value;
  }
}
