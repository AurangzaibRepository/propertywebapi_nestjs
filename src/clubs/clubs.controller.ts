import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { ClubExistsPipe } from './pipes/club-exists.pipe';
import { ClubLinkPipe } from './pipes/club-link.pipe';
import { Club } from './club.model';

@Controller('clubs')
export class ClubsController {
  constructor(private clubsService: ClubsService) {}

  @Get()
  async listing(): Promise<Club[]> {
    const data = await this.clubsService.getListing();

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, ClubExistsPipe) id: number,
  ): Promise<Club | string> {
    const data = await this.clubsService.getDetails(id);

    return data ?? 'Club not found';
  }

  @Post()
  async create(@Body() createClubDto: CreateClubDto): Promise<string> {
    await this.clubsService.save(createClubDto);

    return 'Club created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, ClubExistsPipe) id: number,
    @Body() updateClubDto: CreateClubDto,
  ): Promise<string> {
    await this.clubsService.update(id, updateClubDto);

    return 'Club updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, ClubExistsPipe, ClubLinkPipe) id: number,
  ): Promise<string> {
    await this.clubsService.delete(id);

    return 'Club deleted successfully';
  }
}
