import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Metadata } from './metadata.model';
import { MetadataInterface } from './interfaces/metadata.interface';

@Injectable()
export class MetadataService {
  constructor(
    @InjectModel(Metadata)
    private metadata: typeof Metadata,
  ) {}

  async getByPage(page: string): Promise<Metadata | null> {
    const data = await this.metadata.findOne({
      where: { page },
    });

    return data;
  }

  async update(page: string, data: MetadataInterface) {
    await this.metadata.update(data, {
      where: { page },
    });
  }
}
