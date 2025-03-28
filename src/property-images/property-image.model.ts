import {
  Table,
  Model,
  Column,
  AllowNull,
  DataType,
  DefaultScope,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Property } from 'src/properties/property.model';

@DefaultScope(() => ({
  attributes: ['id', 'picture', 'PropertyId'],
}))
@Table({
  modelName: 'PropertyImage',
  tableName: 'property_images',
})
export class PropertyImage extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(200))
  picture: string;

  @ForeignKey(() => Property)
  @AllowNull(false)
  @Column
  PropertyId: number;

  @BelongsTo(() => Property)
  property: Property;
}
