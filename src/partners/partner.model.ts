import {
  Model,
  Table,
  Column,
  AllowNull,
  DefaultScope,
  DataType,
} from 'sequelize-typescript';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table({
  modelName: 'Partner',
  tableName: 'printers',
})
export class Partner extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING(200))
  picture: string;

  @AllowNull(false)
  @Column(DataType.STRING(700))
  url: string;
}
