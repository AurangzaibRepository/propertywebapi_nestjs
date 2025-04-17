import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { AmenitiesService } from '../amenities.service';

@ValidatorConstraint({ name: 'amenityCode' })
export class AmenityCodeExists implements ValidatorConstraintInterface {
  constructor(private amenitiesService: AmenitiesService) {}

  async validate(code: string, args: ValidationArguments) {
    const amenity = await this.amenitiesService.getByAttribute('code', code);

    return !amenity;
  }

  defaultMessage(args: ValidationArguments) {
    return `Amenity with code ${args.value} already exists`;
  }
}