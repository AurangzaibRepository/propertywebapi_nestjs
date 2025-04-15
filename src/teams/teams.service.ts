import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FormatService } from 'src/helpers/format.service';
import { Team } from './team.model';
import { TeamInterface } from './interfaces/team.interface';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team)
    private team: typeof Team,
    private formatService: FormatService,
  ) {}

  async getAll(): Promise<Team[]> {
    const data = await this.team.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getListing(pageNumber: number): Promise<Team[]> {
    const [limit, offset] = this.formatService.getLimitOffset(pageNumber);

    const data = await this.team.findAll({
      limit,
      offset,
    });

    return data;
  }

  async getDetails(id: number): Promise<Team | null> {
    const data = await this.team.findByPk(id);

    return data ?? null;
  }

  async save(data: TeamInterface) {
    await this.team.create(data as Partial<Team>);
  }

  async update(id: number, data: TeamInterface) {
    await this.team.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.team.destroy({
      where: { id },
    });
  }
}
