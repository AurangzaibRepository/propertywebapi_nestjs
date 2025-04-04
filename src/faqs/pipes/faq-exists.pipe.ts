import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FAQ } from '../faq.model';

export class FAQExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(FAQ)
    private faq: typeof FAQ,
  ) {}

  async transform(value: number) {
    const data = await this.faq.findByPk(value);

    if (!data) {
      throw new BadRequestException('FAQ not found');
    }

    return value;
  }
}
