import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from 'src/locations/location.model';

export class StateLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(Location)
    private location: typeof Location,
  ) {}

  async transform(value: number) {
    // Check if state is linked with location
    const location = await this.location.findOne({
      where: { StateId: value },
    });

    if (location) {
      throw new BadRequestException('State is linked with location');
    }

    return value;
  }
}
