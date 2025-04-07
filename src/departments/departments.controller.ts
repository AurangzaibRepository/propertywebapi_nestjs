import {
  Controller,
  Get,
  Post,
  Delete,
  HttpCode,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { Department } from './department.model';
import { DepartmentExistsPipe } from './pipes/department-exists.pipe';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private departmentsService: DepartmentsService) {}

  @Get()
  async all(): Promise<Department[]> {
    const data = await this.departmentsService.getAll();

    return data;
  }

  @Get('listing/:pageNumber')
  async listing(
    @Param('pageNumber', ParseIntPipe) pageNumber: number,
  ): Promise<Department[]> {
    const data = await this.departmentsService.getListing(pageNumber);

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, DepartmentExistsPipe) id: number,
  ): Promise<Department | string> {
    const data = await this.departmentsService.getDetails(id);

    return data ?? 'Department not found';
  }

  @Post()
  async create(
    @Body() createDepartmentDto: CreateDepartmentDto,
  ): Promise<string> {
    await this.departmentsService.save(createDepartmentDto);

    return 'Department created successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, DepartmentExistsPipe) id: number,
  ): Promise<string> {
    await this.departmentsService.delete(id);

    return 'Department deleted successfully';
  }
}
