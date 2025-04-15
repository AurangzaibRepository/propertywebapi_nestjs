import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from 'src/properties/property.model';

export class TeamLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(Property)
    private property: typeof Property,
  ) {}

  async transform(value: number) {
    const property = await this.property.findOne({
      where: { TeamId: value },
    });

    if (property) {
      throw new BadRequestException('Team is linked with property');
    }

    return value;
  }
}
