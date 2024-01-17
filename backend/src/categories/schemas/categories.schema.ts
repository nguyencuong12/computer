import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type CategoriesDocument = HydratedDocument<Categories>;

@Schema()
export class Categories {
  @Prop()
  title: string;
  @Prop()
  products:[string]
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
