import {
  Model,
  Table,
  Column,
  AllowNull,
  DefaultScope,
  HasMany,
} from 'sequelize-typescript';
import { Team } from 'src/teams/team.model';

// Scopes
@DefaultScope(() => ({
  attributes: ['id', 'name'],
}))
@Table({
  modelName: 'Department',
  tableName: 'departments',
})
export class Department extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => Team)
  teams: Team[];
}
