import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from '../department.model';

export class DepartmentExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Department)
    private department: typeof Department,
  ) {}

  async transform(value: number) {
    const data = await this.department.findByPk(value);

    if (!data) {
      throw new BadRequestException('Department not found');
    }

    return value;
  }
}
