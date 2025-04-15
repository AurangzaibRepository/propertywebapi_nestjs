import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from 'src/properties/property.model';

export class DeveloperLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(Property)
    private property: typeof Property,
  ) {}

  async transform(value: number) {
    // Check if developer is linked with property
    const property = await this.property.findOne({
      where: { DeveloperId: value },
    });

    if (property) {
      throw new BadRequestException('Developer is linked with property');
    }

    return value;
  }
}
