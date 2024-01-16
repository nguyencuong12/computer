import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type CategoriesDocument = HydratedDocument<Categories>;

@Schema()
export class Categories {
  @Prop()
  id: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
