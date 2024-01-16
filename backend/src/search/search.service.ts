import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from 'src/products/schemas/product.schema';
import { Categories } from 'src/categories/schemas/categories.schema';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Products.name) private productModel: Model<Products>,
    @InjectModel(Categories.name) private categoryModel: Model<Categories>,
  ) {}
  create(createSearchDto: CreateSearchDto) {
    return 'This action adds a new search';
  }

  findAll() {
    return `This action returns all search`;
  }

  findProductWithTitle(searchField: string) {
    return this.productModel.find({
      title: {
        $regex: searchField,
        $options: 'i',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} search`;
  }

  update(id: number, updateSearchDto: UpdateSearchDto) {
    return `This action updates a #${id} search`;
  }

  remove(id: number) {
    return `This action removes a #${id} search`;
  }
}
