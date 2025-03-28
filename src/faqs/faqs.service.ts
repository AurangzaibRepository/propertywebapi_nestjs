import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FAQ } from './faq.model';

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

  async delete(id: number) {
    await this.faq.destroy({
      where: { id },
    });
  }
}
