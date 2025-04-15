import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsEmail,
  IsEnum,
  Length,
  IsArray,
  ArrayNotEmpty,
  ValidateNested,
} from 'class-validator';
import { STATUS } from 'src/enums/common.enum';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsString()
  picture: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  contact_number: string;

  @IsNotEmpty()
  @IsInt({
    message: 'DepartmentId must be an integer',
  })
  DepartmentId: number;

  @IsEnum(STATUS, {
    message: 'Invalid status',
  })
  status: STATUS;

  @IsString()
  @Length(1, 150, {
    message: 'Metadata title must be between 1 and 150 characters long',
  })
  metadata_title: string;

  @IsString()
  @Length(1, 700, {
    message: 'Metadata description must be between 1 and 700 characters long',
  })
  metadata_description: string;

  @IsNotEmpty()
  @IsString()
  metadata_focus_keywords: string;

  @IsString()
  @Length(1, 500, {
    message: 'Canonical URL must be between 1 and 500 characters long',
  })
  metadata_canonical_url: string;

  @IsArray()
  @ValidateNested()
  @ArrayNotEmpty({
    message: 'Language Ids should not be empty',
  })
  @IsInt({ each: true, message: 'Language Ids must be an integer' })
  languagIds: number[];
}
