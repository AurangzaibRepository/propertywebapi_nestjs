import { Injectable } from '@nestjs/common';
import { Property } from './property.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property)
    private property: typeof Property,
  ) {}

  async getByAttribute(
    attribute: string,
    value: any,
  ): Promise<Property | null> {
    const data = await this.property.findOne({
      where: { [attribute]: value },
    });

    return data;
  }
}
