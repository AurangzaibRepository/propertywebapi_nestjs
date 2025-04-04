import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from '../location.model';

export class LocationExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Location)
    private location: typeof Location,
  ) {}

  async transform(value: number) {
    const data = await this.location.findByPk(value);

    if (!data) {
      throw new BadRequestException('Location not found');
    }

    return value;
  }
}
