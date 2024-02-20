import { AbstractDocument } from '@app/shared/database';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  @Prop()
  name!: string;

  @Prop()
  price!: number;

  @Prop()
  phoneNumber!: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
