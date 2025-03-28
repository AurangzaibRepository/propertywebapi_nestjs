import {
  Table,
  Model,
  Column,
  DataType,
  AllowNull,
  DefaultScope,
} from 'sequelize-typescript';
import { PAGES } from 'src/enums/common.enum';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table({
  modelName: 'Metadata',
  tableName: 'metadata',
})
export class Metadata extends Model {
  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  header: string;

  @Column({
    allowNull: false,
    type: DataType.ENUM,
    values: Object.values(PAGES),
  })
  page: PAGES;

  @Column(DataType.TEXT)
  focus_keywords: string;

  @Column(DataType.STRING(500))
  canonical_url: string;

  @Column(DataType.TEXT)
  schema: string;
}
