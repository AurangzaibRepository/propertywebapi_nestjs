import {
  Model,
  Table,
  Column,
  AllowNull,
  Unique,
  DataType,
  DefaultScope,
} from 'sequelize-typescript';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table({
  modelName: 'User',
  tableName: 'users',
})
export class User extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  password: string;
}
