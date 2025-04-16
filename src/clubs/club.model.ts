import {
  Table,
  Model,
  Column,
  AllowNull,
  DataType,
  DefaultScope,
  HasMany,
} from 'sequelize-typescript';
import { Team } from 'src/teams/team.model';

@DefaultScope(() => ({
  attributes: ['title', 'description', 'image'],
}))
@Table({
  modelName: 'Club',
  tableName: 'clubs',
})
export class Club extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(80))
  title: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  image: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  activities: string;

  @HasMany(() => Team)
  teams: Team[];
}
