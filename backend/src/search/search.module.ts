import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductSchema } from '../products/schemas/product.schema';

import {
  Categories,
  CategoriesSchema,
} from '../categories/schemas/categories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Products.name, schema: ProductSchema }]),
    MongooseModule.forFeature([
      { name: Categories.name, schema: CategoriesSchema },
    ]),

    // MongooseModule.forFeature([{ name: Products.name, schema: ProductSchema }]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
