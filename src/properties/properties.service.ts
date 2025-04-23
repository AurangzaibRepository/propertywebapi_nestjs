import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from './property.model';
import { FormatService } from 'src/helpers/format.service';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property)
    private property: typeof Property,
    private formatService: FormatService,
  ) {}

  async getListing(pageNumber: number): Promise<Property[]> {
    const [limit, offset]: number[] = this.formatService.getLimitOffset(pageNumber);

    const data = await this.property.findAll({
      order: [['createdAt', 'DESC']],
      limit, offset
    });

    return data;
  }

  async getDetails(id: number): Promise<Property | null> {
    const data = await this.property.findByPk(id);

    return data;
  }

  async getByAttribute(
    attribute: string,
    value: any,
  ): Promise<Property | null> {
    const data = await this.property.findOne({
      where: { [attribute]: value },
    });

    return data;
  }

  async save(data: Property) {
    await this.property.create(data as Partial<Property>);
  }

  async update(id: number, data: Property) {
    await this.property.update(data, {
      where: { id}
    });
  }

  async delete(id: number) {
    await this.property.destroy({
      where: { id}
    });
  }
}
