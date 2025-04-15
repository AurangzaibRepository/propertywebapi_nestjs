import {
  Column,
  Model,
  Table,
  DataType,
  AllowNull,
  Unique,
  DefaultScope,
  Scopes,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { STATUS } from '../enums/blogs.enum';
import { BlogCategory } from 'src/blog-categories/blog-category.model';

// Scopes
@DefaultScope(() => ({
  attributes: {
    exclude: ['updatedAt'],
  },
}))
@Scopes(() => ({
  listing: {
    where: {
      status: STATUS.PUBLISH,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    order: [['id', 'DESC']],
    limit: parseInt(process.env.PAGE_SIZE!),
  },
}))
// Table
@Table({
  modelName: 'Blog',
  tableName: 'blogs',
})
export class Blog extends Model {
  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  caption: string;

  @Column({
    allowNull: false,
    get() {
      const rawValue: string = this.getDataValue('picture');
      return `${process.env.ADMIN_API_URL}images/blogs/${rawValue}`;
    },
  })
  picture: string;

  @AllowNull(false)
  @Column
  description: string;

  @Unique
  @Column(DataType.STRING(20))
  slug: string;

  @Column({
    allowNull: false,
    defaultValue: STATUS.DRAFT,
    type: DataType.ENUM,
    values: Object.values(STATUS),
  })
  status: STATUS;

  @ForeignKey(() => BlogCategory)
  @AllowNull(false)
  @Column
  BlogCategoryId: number;

  @Column(DataType.STRING(150))
  metadata_title: string;

  @Column(DataType.STRING(700))
  metadata_description: string;

  @Column(DataType.TEXT)
  metadata_focus_keyword: string;

  @Column(DataType.STRING(500))
  metadata_canonical_url: string;

  @Column(DataType.TEXT)
  metadata_schema: string;

  @BelongsTo(() => BlogCategory)
  blogCategory: BlogCategory;
}
