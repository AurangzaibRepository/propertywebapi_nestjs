import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FormatService } from 'src/helpers/format.service';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private user: typeof User,
    private formatService: FormatService,
  ) {}

  async getAll(): Promise<User[]> {
    const data = await this.user.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getListing(pageNumber: number): Promise<User[]> {
    const [limit, offset] = this.formatService.getLimitOffset(pageNumber);

    const data = await this.user.findAll({
      limit,
      offset,
    });

    return data;
  }

  async getDetails(id: number): Promise<User | null> {
    const data = await this.user.findByPk(id);

    return data ?? null;
  }

  async delete(id: number) {
    await this.user.destroy({
      where: { id },
    });
  }
}
