import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PropertyType } from './property-type.model';

@Injectable()
export class PropertyTypesService {
  constructor(
    @InjectModel(PropertyType)
    private propertyType: typeof PropertyType,
  ) {}

  async getAll(): Promise<PropertyType[]> {
    const data = await this.propertyType.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getDetails(id: number): Promise<PropertyType | null> {
    const data = await this.propertyType.findByPk(id);

    return data;
  }
}
