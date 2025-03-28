import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Amenity } from '../amenity.model';

export class AmenityExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Amenity)
    private amenity: typeof Amenity,
  ) {}

  async transform(value: number) {
    const data = await this.amenity.findByPk(value);

    if (!data) {
      throw new BadRequestException('Amenity not found');
    }

    return value;
  }
}
