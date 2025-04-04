import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Partner } from '../partner.model';

export class PartnerExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Partner)
    private partner: typeof Partner,
  ) {}

  async transform(value: number) {
    const data = await this.partner.findByPk(value);

    if (!data) {
      throw new BadRequestException('Partner not found');
    }

    return value;
  }
}
