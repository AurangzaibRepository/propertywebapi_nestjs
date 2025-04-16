import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Club } from '../club.model';

export class ClubExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Club)
    private club: typeof Club,
  ) {}

  async transform(value: number) {
    const data = await this.club.findByPk(value);

    if (!data) {
      throw new BadRequestException('Club not found');
    }

    return data;
  }
}
