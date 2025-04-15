import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FormatService } from 'src/helpers/format.service';
import { Department } from './department.model';
import { DepartmentInterface } from './interfaces/department.interface';

@Injectable()
export class DepartmentsService {
  constructor(
    private formatService: FormatService,
    @InjectModel(Department)
    private department: typeof Department,
  ) {}

  async getAll(): Promise<Department[]> {
    const data = await this.department.findAll();

    return data;
  }

  async getListing(pageNumber: number): Promise<Department[]> {
    const [limit, offset] = this.formatService.getLimitOffset(pageNumber);

    const data = await this.department.findAll({
      limit,
      offset,
    });

    return data;
  }

  async getDetails(id: number): Promise<Department | null> {
    const data = await this.department.findByPk(id);

    return data ?? null;
  }

  async save(data: DepartmentInterface) {
    await this.department.create(data as Partial<Department>);
  }

  async update(id: number, data: DepartmentInterface) {
    await this.department.update(data, {
      where: { id },
    });
  }

  async delete(id: number) {
    await this.department.destroy({
      where: { id },
    });
  }
}
