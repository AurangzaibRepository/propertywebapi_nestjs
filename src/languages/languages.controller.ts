import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { Language } from './language.model';
import { CreateLanguageDto } from './dto/create-language.dto';
import { LanguageExistsPipe } from './pipes/language-exists.pipe';
import { LanguageLinkPipe } from './pipes/language-link.pipe';

@Controller('languages')
export class LanguagesController {
  constructor(private languagesService: LanguagesService) {}

  @Get()
  async all(): Promise<Language[]> {
    const data = await this.languagesService.getAll();

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, LanguageExistsPipe) id: number,
  ): Promise<Language | string> {
    const data = await this.languagesService.getDetails(id);

    return data ?? 'Language not found';
  }

  @Post()
  async create(@Body() createLanguageDto: CreateLanguageDto): Promise<string> {
    await this.languagesService.save(createLanguageDto);

    return 'Language created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, LanguageExistsPipe) id: number,
    @Body() updateLanguageDto: CreateLanguageDto,
  ): Promise<string> {
    await this.languagesService.update(id, updateLanguageDto);

    return 'Language updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, LanguageExistsPipe, LanguageLinkPipe) id: number,
  ): Promise<string> {
    await this.languagesService.delete(id);

    return 'Language deleted successfully';
  }
}
