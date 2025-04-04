import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from '../state.model';

export class StateExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(State)
    private state: typeof State,
  ) {}

  async transform(value: number) {
    const data = await this.state.findByPk(value);

    if (!data) {
      throw new BadRequestException('State not found');
    }

    return value;
  }
}
