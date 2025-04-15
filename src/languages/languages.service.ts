import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './language.model';
import { LanguageInterface } from './interfaces/language.interface';

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

  async save(data: LanguageInterface) {
    await this.language.create(data as Partial<Language>);
  }

  async update(id: number, data: LanguageInterface) {
    await this.language.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.language.destroy({
      where: { id },
    });
  }
}
