import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FAQ } from './faq.model';
import { FAQInterface } from './interfaces/faq.interface';

@Injectable()
export class FaqsService {
  constructor(
    @InjectModel(FAQ)
    private faq: typeof FAQ,
  ) {}

  async getAll(page: string): Promise<FAQ[]> {
    const data = await this.faq.findAll({
      where: { page },
    });

    return data;
  }

  async getDetails(id: number): Promise<FAQ | null> {
    const data = await this.faq.findByPk(id);

    return data ?? null;
  }

  async save(data: FAQInterface) {
    await this.faq.create(data);
  }

  async update(id: number, data: FAQInterface) {
    await this.faq.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.faq.destroy({
      where: { id },
    });
  }
}
