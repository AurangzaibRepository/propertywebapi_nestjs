import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FormatService } from '../helpers/format.service';
import { Developer } from './developer.model';
import { DeveloperInterface } from './interfaces/developer.interface';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectModel(Developer)
    private developer: typeof Developer,
    private formatService: FormatService,
  ) {}

  async getAll(): Promise<Developer[]> {
    const data = await this.developer.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getListing(pageNumber: number): Promise<Developer[]> {
    const [limit, offset]: number[] =
      this.formatService.getLimitOffset(pageNumber);

    const data = await this.developer.findAll({
      limit,
      offset,
    });

    return data;
  }

  async getDetails(id: number): Promise<Developer | null> {
    const data = await this.developer.findByPk(id);

    return data;
  }

  async save(data: DeveloperInterface) {
    this.developer.create(data);
  }

  async update(id: number, data: DeveloperInterface) {
    await this.developer.update(data, {
      where: { id },
    });
  }
}
