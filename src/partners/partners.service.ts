import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FormatService } from 'src/helpers/format.service';
import { Partner } from './partner.model';
import { PartnerInterface } from './interfaces/partner.interface';

@Injectable()
export class PartnersService {
  constructor(
    @InjectModel(Partner)
    private partner: typeof Partner,
    private formatService: FormatService,
  ) {}

  async getAll(): Promise<Partner[]> {
    const data = await this.partner.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getListing(pageNumber: number): Promise<Partner[]> {
    const [limit, offset] = this.formatService.getLimitOffset(pageNumber);

    const data = await this.partner.findAll({
      limit,
      offset,
    });

    return data;
  }

  async getDetails(id: number): Promise<Partner | null> {
    const data = await this.partner.findByPk(id);

    return data ?? null;
  }

  async save(data: PartnerInterface) {
    await this.partner.create(data as Partial<Partner>);
  }

  async update(id: number, data: PartnerInterface) {
    await this.partner.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.partner.destroy({
      where: { id },
    });
  }
}
