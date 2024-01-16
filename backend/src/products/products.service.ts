import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Products } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  //DEFINE USING CRUD MONGODB

  constructor(
    @InjectModel(Products.name) private productModel: Model<Products>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Products> {
    // return 'This action adds a new product';
    const createdProduct = new this.productModel(CreateProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Products[]> {
    return await this.productModel
      .find({ title: { $regex: 'tanic', $options: 'i' } })
      .exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
