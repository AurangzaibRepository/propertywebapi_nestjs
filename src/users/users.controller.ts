import {
  Controller,
  Get,
  Delete,
  Param,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';
import { UserExistsPipe } from './pipes/user-exists.pipe';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async all(): Promise<User[]> {
    const data = await this.usersService.getAll();

    return data;
  }

  @Get('listing/:pageNumber')
  async listing(
    @Param('pageNumber', ParseIntPipe) pageNumber: number,
  ): Promise<User[]> {
    const data = await this.usersService.getListing(pageNumber);

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, UserExistsPipe) id: number,
  ): Promise<User | string> {
    const user = await this.usersService.getDetails(id);

    return user ?? 'User not found';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, UserExistsPipe) id: number,
  ): Promise<string> {
    await this.usersService.delete(id);

    return 'User deleted successfully';
  }
}
