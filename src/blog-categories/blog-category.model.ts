import {
  Model,
  Table,
  Column,
  DataType,
  DefaultScope,
  HasMany,
} from 'sequelize-typescript';
import { Blog } from 'src/blogs/blog.model';

@DefaultScope(() => ({
  attributes: ['id', 'name'],
  order: [['name', 'ASC']],	
}))
@Table({
  modelName: 'BlogCategory',
  tableName: 'blog_categories',
})
export class BlogCategory extends Model {
  @Column({
    allowNull: false,
    type: DataType.STRING(100),
    get() {
      const rawValue: string = this.getDataValue('name');

      return rawValue.toUpperCase();
    },
  })
  name: string;

  @HasMany(() => Blog)
  blogs: Blog[];
}
