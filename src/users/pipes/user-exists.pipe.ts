import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user.model';

export class UserExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(User)
    private user: typeof User,
  ) {}

  async transform(value: number) {
    const data = await this.user.findByPk(value);

    if (!data) {
      throw new BadRequestException('User not found');
    }

    return value;
  }
}
