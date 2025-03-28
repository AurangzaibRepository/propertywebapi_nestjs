import {
  Table,
  Model,
  Column,
  AllowNull,
  DataType,
  DefaultScope,
} from 'sequelize-typescript';
import { PAGES } from 'src/enums/common.enum';

@DefaultScope(() => ({
  attributes: ['id', 'question', 'asnwer'],
}))
@Table({
  modelName: 'FAQ',
  tableName: 'faqs',
})
export class FAQ extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(500))
  question: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  answer: string;

  @Column({
    allowNull: false,
    type: DataType.ENUM,
    values: Object.values(PAGES),
  })
  page: PAGES;
}
