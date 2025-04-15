import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PropertyType } from './property-type.model';
import { PropertyTypeInterface } from './interfaces/property-type.interface';

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

  async save(data: PropertyTypeInterface) {
    await this.propertyType.create(data);
  }

  async update(id: number, data: PropertyTypeInterface) {
    await this.propertyType.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.propertyType.destroy({
      where: { id },
    });
  }
}
