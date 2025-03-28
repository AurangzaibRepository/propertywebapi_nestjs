import {
  Model,
  Table,
  Column,
  AllowNull,
  DefaultScope,
  BelongsTo,
} from 'sequelize-typescript';
import { State } from 'src/states/state.model';

@DefaultScope(() => ({
  attributes: ['id', 'name'],
}))
@Table({
  modelName: 'Location',
  tableName: 'locations',
})
export class Location extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @Column({
    allowNull: false,
    references: {
      model: 'states',
      key: 'id',
    },
  })
  StateId: number;

  @BelongsTo(() => State)
  state: State;
}
