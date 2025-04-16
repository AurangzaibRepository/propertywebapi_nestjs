import {
  Table,
  Column,
  DataType,
  Model,
  AllowNull,
  Scopes,
  DefaultScope,
  HasMany,
  BelongsTo,
  BelongsToMany,
  ForeignKey,
} from 'sequelize-typescript';
import { STATUS } from '../enums/common.enum';
import { Department } from 'src/departments/department.model';
import { Language } from 'src/languages/language.model';
import { Property } from 'src/properties/property.model';
import { Club } from 'src/clubs/club.model';
import { TeamLanguage } from 'src/team-language/team-language.model';

// Scopes
@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Scopes(() => ({
  listing: {
    where: { status: STATUS.ACTIVE },
  },
}))
@Table({
  modelName: 'Team',
  tableName: 'teams',
})
export class Team extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  message: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    get() {
      const rawValue = this.getDataValue('picture');
      return `${process.env.ADMIN_API_URL}images/teams/${rawValue}}`;
    },
  })
  picture: string;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  contact_number: string;

  @ForeignKey(() => Department)
  @AllowNull(false)
  @Column
  DepartmentId: number;

  @ForeignKey(() => Club)
  @AllowNull(false)
  @Column
  ClubId: number;

  @Column({
    allowNull: false,
    defaultValue: STATUS.ACTIVE,
    type: DataType.ENUM,
    values: Object.values(STATUS),
  })
  status: STATUS;

  @Column(DataType.STRING(150))
  metadata_title: string;

  @Column(DataType.STRING(700))
  metadata_description: string;

  @Column(DataType.TEXT)
  metadata_focus_keywords: string;

  @Column(DataType.STRING(500))
  metadata_canonical_url: string;

  @BelongsTo(() => Department)
  department: Department;

  @BelongsTo(() => Club)
  club: Club;

  @HasMany(() => Property)
  properties: Property[];

  @BelongsToMany(() => Language, () => TeamLanguage)
  languages: Language[];
}
