import {
  Table,
  Model,
  Column,
  AllowNull,
  DataType,
  DefaultScope,
} from 'sequelize-typescript';

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
}
