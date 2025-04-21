import {
  Table,
  Model,
  Column,
  AllowNull,
  DataType,
  DefaultScope,
  BelongsToMany
} from 'sequelize-typescript';
import { Property } from 'src/properties/property.model';
import { PropertyAmenity } from 'src/property-amenities/property-amenity.model';

@DefaultScope(() => ({
  attributes: ['id', 'code', 'name'],
}))
@Table({
  modelName: 'Amenity',
  tableName: 'amenities',
})
export class Amenity extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(5))
  code: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  name: string;

  @BelongsToMany(() => Property, () => PropertyAmenity)
  properties: Property[];
}
