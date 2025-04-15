import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from './state.model';
import { StateInterface } from './interfaces/state.interface';

@Injectable()
export class StatesService {
  constructor(
    @InjectModel(State)
    private state: typeof State,
  ) {}

  async getAll(): Promise<State[]> {
    const data = await this.state.findAll({
      order: [['name', 'ASC']],
    });

    return data;
  }

  async getDetails(id: number): Promise<State | null> {
    const data = await this.state.findByPk(id);

    return data ?? null;
  }

  async save(data: StateInterface) {
    await this.state.create(data as Partial<State>);
  }

  async update(id: number, data: StateInterface) {
    await this.state.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.state.destroy({
      where: { id },
    });
  }
}
