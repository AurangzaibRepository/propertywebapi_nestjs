import { STATUS, PUBLISH_STATUS } from 'src/enums/properties.enums';

export interface PropertyInterface {
  title: string;
  description: string;
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
