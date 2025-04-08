import { IsNotEmpty, IsString, Length, IsUrl } from 'class-validator';

export class CreatePartnerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @Length(1, 200, {
    message: 'Picture must be between 1 and 200 characters long',
  })
  picture: string;

  @IsUrl()
  @Length(1, 700, {
    message: 'URL must be between 1 and 700 characters long',
  })
  url: string;
}
