import {
  Table,
  Model,
  Column,
  AllowNull,
  Unique,
  DataType,
  DefaultScope,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Location } from 'src/locations/location.model';
import { Team } from 'src/teams/team.model';
import { PropertyType } from 'src/property-types/property-type.model';
import { PropertyImage } from 'src/property-images/property-image.model';
import { STATUS, PUBLISH_STATUS } from 'src/enums/properties.enums';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table({
  modelName: 'Property',
  tableName: 'properties',
})
export class Property extends Model {
  @AllowNull(false)
  @Column(DataType.STRING(300))
  title: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description: string;

  @AllowNull(false)
  @Column(DataType.STRING(200))
  picture: string;

  @AllowNull(false)
  @Column
  price: number;

  @ForeignKey(() => Location)
  @AllowNull(false)
  @Column
  LocationId: number;

  @ForeignKey(() => Team)
  @AllowNull(false)
  @Column
  TeamId: number;

  @AllowNull(false)
  @Column
  bed: number;

  @AllowNull(false)
  @Column
  bath: number;

  @AllowNull(false)
  @Column(DataType.STRING(15))
  size: string;

  @AllowNull(false)
  @Unique
  @Column
  permit_no: bigint;

  @AllowNull(false)
  @Column
  qr_code_link: string;

  @AllowNull(false)
  @Unique
  @Column
  slug: string;

  @Column({
    allowNull: false,
    type: DataType.ENUM,
    values: Object.values(STATUS),
  })
  status: STATUS;

  @ForeignKey(() => PropertyType)
  @AllowNull(false)
  @Column
  PropertyTypeId: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(30))
  reference_number: string;

  @Column(DataType.DECIMAL(11, 9))
  latitude: number;

  @Column(DataType.DECIMAL(11, 9))
  longitude: number;

  @Column({
    allowNull: false,
    defaultValue: PUBLISH_STATUS.DRAFT,
    type: DataType.ENUM,
    values: Object.values(PUBLISH_STATUS),
  })
  publish_status: PUBLISH_STATUS;

  @Column(DataType.STRING(150))
  metadata_title: string;

  @Column(DataType.STRING(700))
  metadata_description: string;

  @Column(DataType.TEXT)
  metadata_focus_keywords: string;

  @Column(DataType.STRING(500))
  metadata_canonical_url: string;

  @Column(DataType.TEXT)
  metadata_schema: string;

  @BelongsTo(() => Location)
  location: Location;

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => PropertyType)
  propertyType: PropertyType;

  @HasMany(() => PropertyImage)
  propertyImages: PropertyImage[];
}
