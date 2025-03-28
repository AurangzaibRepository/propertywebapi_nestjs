import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import { Location } from 'src/locations/location.model';

@Table({
  modelName: 'State',
  tableName: 'states',
  timestamps: false,
})
export class State extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(200))
  name: string;

  @HasMany(() => Location)
  locations: Location[];
}
