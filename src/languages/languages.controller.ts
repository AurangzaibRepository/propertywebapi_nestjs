import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { Language } from './language.model';
import { LanguageExistsPipe } from './pipes/language-exists.pipe';

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
}
