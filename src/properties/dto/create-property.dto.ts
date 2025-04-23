import { IsNotEmpty, Length, IsEnum, Max } from 'class-validator';
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

  price: number;

  LocationId: number;

  TeamId: number;

  bed: number;

  bath: number;

  size: string;

  permit_no: bigint;

  qr_code_link: string;

  slug: string;

  status: STATUS;

  PropertyTypeId: number;

  DeveloperId: number;

  reference_number: string;

  latitude: number;

  longitude: number;

  publish_status: PUBLISH_STATUS;

  metadata_title: string;

  metadata_description: string;

  metadata_focus_keywords: string;

  metadata_canonical_url: string;

  metadata_schema: string;
}
