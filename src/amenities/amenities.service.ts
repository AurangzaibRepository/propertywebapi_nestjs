import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Amenity } from './amenity.model';
import { AmenityInterface } from './interfaces/amenity.interface';

@Injectable()
export class AmenitiesService {
  constructor(
    @InjectModel(Amenity)
    private amenity: typeof Amenity,
  ) {}

  async getAll(): Promise<Amenity[]> {
    const data = await this.amenity.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getDetails(id: number): Promise<Amenity | null> {
    const data = await this.amenity.findByPk(id);

    return data ?? null;
  }

  async save(data: AmenityInterface) {
    await this.amenity.create(data);
  }

  async update(id: number, data: AmenityInterface) {
    await this.amenity.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.amenity.destroy({
      where: { id },
    });
  }
}
