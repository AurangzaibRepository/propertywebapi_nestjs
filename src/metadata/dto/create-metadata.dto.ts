import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateMetadataDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  header: string;

  @IsNotEmpty()
  @IsString()
  focus_keywords: string;

  @IsString()
  @Length(1, 500, {
    message: 'Canonical URL must be between 1 and 500 characters long',
  })
  canonical_url: string;

  @IsNotEmpty()
  @IsString()
  schema: string;
}
