import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FormatService } from 'src/helpers/format.service';
import { Location } from './location.model';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location)
    private location: typeof Location,
    private formatService: FormatService,
  ) {}

  async getAll(): Promise<Location[]> {
    const data = await this.location.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getListing(pageNumber: number): Promise<Location[]> {
    const [limit, offset] = this.formatService.getLimitOffset(pageNumber);

    const data = await this.location.findAll({
      limit,
      offset,
    });

    return data;
  }

  async getDetails(id: number): Promise<Location | null> {
    const data = await this.location.findByPk(id);

    return data ?? null;
  }

  async delete(id: number) {
    await this.location.destroy({
      where: { id },
    });
  }
}
