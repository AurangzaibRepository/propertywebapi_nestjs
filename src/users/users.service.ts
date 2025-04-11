import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { FormatService } from 'src/helpers/format.service';
import { User } from './user.model';
import { UserInterface } from './interfaces/user.interface';

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

  async save(data: UserInterface) {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(
      data.password,
      process.env.HASH_SALT_ROUNDS || 10,
    );

    await this.user.create({
      ...data,
      password: hashedPassword,
    });
  }

  async update(id: number, data: UserInterface) {
    await this.user.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.user.destroy({
      where: { id },
    });
  }
}
