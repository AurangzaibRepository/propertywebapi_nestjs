import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Developer } from '../developer.model';

export class DeveloperExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Developer)
    private developer: typeof Developer,
  ) {}

  async transform(value: number) {
    const data = await this.developer.findByPk(value);

    if (!data) {
      throw new BadRequestException('Developer not found');
    }

    return value;
  }
}
