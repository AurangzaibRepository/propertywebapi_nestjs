import {
  Table,
  Model,
  Column,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { Team } from 'src/teams/team.model';
import { Language } from 'src/languages/language.model';

@Table({
  modelName: 'TeamLanguage',
  tableName: 'team_languages',
})
export class TeamLanguage extends Model {
  @ForeignKey(() => Team)
  @AllowNull(false)
  @Column
  TeamId: number;

  @ForeignKey(() => Language)
  @AllowNull(false)
  @Column
  LanguageId: number;
}
