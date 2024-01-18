import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ProductDocument = HydratedDocument<Products>;
interface sizeInterfaces {
  size: string;
  quatity: number;
  price: number;
}

@Schema({ versionKey: false })
export class Products {
  @Prop({ required: true, unique: true,trim:true })
  name: string;
  @Prop({ required: true ,trim:true})
  description: string;
  @Prop()
  price: number;
  @Prop()
  quatity: number;
  @Prop({ required: true })
  images: [string];
  @Prop()
  creatorPerson: string;
  @Prop()
  dateCreated: string;
  @Prop()
  dateModify: string;
  @Prop()
  sizes: [sizeInterfaces];
  @Prop()
  brand: string;
  @Prop()
  sku: string;
  @Prop()
  category: string;
  // @Prop()
  // quatity:number;
  // @Prop()
  // quatity:number;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
