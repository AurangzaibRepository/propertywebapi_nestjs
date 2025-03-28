import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './language.model';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel(Language)
    private language: typeof Language,
  ) {}

  async getAll(): Promise<Language[]> {
    const data = await this.language.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getDetails(id: number): Promise<Language | null> {
    const data = await this.language.findByPk(id);

    return data;
  }
}
