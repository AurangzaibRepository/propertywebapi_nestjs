import { IsNotEmpty, IsEnum, Max, IsInt, IsDecimal } from 'class-validator';
import { STATUS, PUBLISH_STATUS } from 'src/enums/properties.enums';

export class CreatePropertyDto {
  @IsNotEmpty()
  @Max(30, {
    message: 'Title cannot be greater than 30 characters',
  })
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @Max(200, {
    message: 'Picture cannot be greater than 200 characters',
  })
  picture: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsInt()
  LocationId: number;

  @IsNotEmpty()
  @IsInt()
  TeamId: number;

  @IsNotEmpty()
  @IsInt()
  bed: number;

  @IsNotEmpty()
  @IsInt()
  bath: number;

  @IsNotEmpty()
  @Max(15, {
    message: 'Size cannot be greater than 15 characters',
  })
  size: string;

  @IsNotEmpty()
  @IsInt()
  permit_no: bigint;

  @IsNotEmpty()
  qr_code_link: string;

  @IsNotEmpty() // Add custom validator to check uniqueness
  slug: string;

  @IsNotEmpty()
  @IsEnum(STATUS)
  status: STATUS;

  @IsNotEmpty()
  @IsInt()
  PropertyTypeId: number;

  @IsNotEmpty()
  @IsInt()
  DeveloperId: number;

  @IsNotEmpty()
  @Max(30, {
    message: 'Reference number cannot be greater than 30 characters',
  })
  reference_number: string;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '9' })
  latitude: number;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '9' })
  longitude: number;

  @IsNotEmpty()
  @IsEnum(PUBLISH_STATUS)
  publish_status: PUBLISH_STATUS;

  @IsNotEmpty()
  @Max(150, {
    message: 'Metadata title cannot be greater than 150 characters',
  })
  metadata_title: string;

  @IsNotEmpty()
  @Max(700, {
    message: 'Metadata description cannot be greater than 700 characters',
  })
  metadata_description: string;

  @IsNotEmpty()
  metadata_focus_keywords: string;

  @IsNotEmpty()
  @Max(500, {
    message: 'Metadata canonical URL cannot be greater than 500 characters',
  })
  metadata_canonical_url: string;

  @IsNotEmpty()
  metadata_schema: string;
}
