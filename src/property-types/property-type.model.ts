import {
  Table,
  Model,
  Column,
  AllowNull,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Property } from 'src/properties/property.model';

@Table({
  modelName: 'PropertyType',
  tableName: 'property_types',
})
export class PropertyType extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  name: string;

  @HasMany(() => Property)
  properties: Property[];
}
