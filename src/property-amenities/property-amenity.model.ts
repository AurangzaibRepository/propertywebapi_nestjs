import {
  Table,
  Model,
  Column,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { Property } from 'src/properties/property.model';
import { Amenity } from 'src/amenities/amenity.model';

@Table({
  modelName: 'PropertyAmenity',
  tableName: 'property_amenities',
})
export class PropertyAmenity extends Model {
  @ForeignKey(() => Property)
  @AllowNull(false)
  @Column
  PropertyId: number;

  @ForeignKey(() => Amenity)
  @AllowNull(false)
  @Column
  AmenityId: number;
}
