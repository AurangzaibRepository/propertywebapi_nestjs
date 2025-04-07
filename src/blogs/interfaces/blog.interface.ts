import { STATUS } from 'src/enums/blogs.enum';

export interface BlogInterface {
  title: string;
  caption: string;
  picture: string;
  description: string;
  slug: string;
  status: STATUS;
  metadata_title: string;
  metadata_description: string;
  metadata_focus_keyword: string;
  metadata_canonical_url: string;
  metadata_schema: string;
  BlogCategoryId: number;
}
