import {
  Table,
  Model,
  Column,
  DataType,
  AllowNull,
  DefaultScope,
  BelongsToMany,
} from 'sequelize-typescript';
import { TeamLanguage } from 'src/team-language/team-language.model';
import { Team } from 'src/teams/team.model';

@DefaultScope(() => ({
  attributes: ['id', 'code', 'name'],
}))
@Table({
  modelName: 'Language',
  tableName: 'languages',
})
export class Language extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(10))
  code: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  name: string;

  @BelongsToMany(() => Team, () => TeamLanguage)
  teams: Team[];
}
