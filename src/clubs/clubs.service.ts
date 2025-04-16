import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClubInterface } from './interfaces/club.interface';
import { Club } from './club.model';

@Injectable()
export class ClubsService {
  constructor(
    @InjectModel(Club)
    private club: typeof Club,
  ) {}

  async getListing(): Promise<Club[]> {
    const data = await this.club.findAll({
      order: [['title', 'ASC']],
    });

    return data;
  }

  async getDetails(id: number): Promise<Club | null> {
    const data = await this.club.findByPk(id);

    return data;
  }

  async save(data: ClubInterface) {
    await this.club.create(data as Partial<Club>);
  }

  async update(id: number, data: ClubInterface) {
    await this.club.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.club.destroy({
      where: { id },
    });
  }
}
