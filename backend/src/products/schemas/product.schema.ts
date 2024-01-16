import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ProductDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop()
  id: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
