import { IsNotEmpty } from 'class-validator';

interface sizeInterfaces {
  size: string;
  quatity: number;
  price: number;
}

export class CreateProductDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  price: number;
  quatity: boolean;
  images: string[];
  creatorPerson: string;
  dateCreated: string;
  dateModify: string;
  brand: string;
  sku: string;

  sizes: sizeInterfaces[];

  // @Prop({ required: true })
  // title: string;
  // @Prop({ required: true })
  // description: string;
  // @Prop()
  // price: number;
  // @Prop()
  // quatity: number;
  // @Prop({ required: true })
  // images: [string];
  // @Prop()
  // creatorPerson: string;
  // @Prop()
  // dateCreated: string;
  // @Prop()
  // dateModify: string;
  // @Prop()
  // sizes: [sizeInterfaces];
}
