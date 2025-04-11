import {
  Table,
  Model,
  Column,
  AllowNull,
  DataType,
  DefaultScope,
  HasMany,
} from 'sequelize-typescript';
import { Property } from 'src/properties/property.model';

@DefaultScope(() => ({
  attributes: ['id', 'name', 'description', 'picture'],
}))
@Table({
  modelName: 'Developer',
  tableName: 'developers',
})
export class Developer extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING(700))
  description: string;

  @AllowNull(false)
  @Column(DataType.STRING(200))
  picture: string;

  @HasMany(() => Property)
  properties: Property[];
}
