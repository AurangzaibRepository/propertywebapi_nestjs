import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from '../language.model';

export class LanguageExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Language)
    private language: typeof Language,
  ) {}

  async transform(value: number) {
    const data = await this.language.findByPk(value);

    if (!data) {
      throw new BadRequestException('Language not found');
    }

    return value;
  }
}
