import { STATUS } from 'src/enums/common.enum';

export interface TeamInterface {
  name: string;
  title: string;
  message: string;
  picture: string;
  email: string;
  contact_number: string;
  DepartmentId: number;
  status: STATUS;
  metadata_title: string;
  metadata_description: string;
  metadata_focus_keywords: string;
  metadata_canonical_url: string;
  languagIds: number[];
}
