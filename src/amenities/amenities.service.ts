import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Amenity } from './amenity.model';

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

  async delete(id: number) {
    await this.amenity.destroy({
      where: { id },
    });
  }
}
