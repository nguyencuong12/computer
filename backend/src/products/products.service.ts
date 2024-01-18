import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Products } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { FilterProductDTO } from './dto/filter-product.dto';

@Injectable()
export class ProductsService {
  //DEFINE USING CRUD MONGODB

  constructor(
    @InjectModel(Products.name) private productModel: Model<Products>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Products> {
    // return 'This action adds a new product';
    const createdProduct = new this.productModel(createProductDto);
    // createProductDto.
    return createdProduct.save();
  }
  async getProductsWithFilter(
    filterProductDTO: FilterProductDTO,
  ): Promise<Products[]> {
    const { search, category } = filterProductDTO;

    let products = await this.productModel.find().exec();
    if (search) {
      products.filter(
        (product) =>
          product.name.includes(search) || product.description.includes(search),
      );
    }
    if (category) {
      products = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase(),
      );
    }
    return products;
  }

  async getAllProducts(): Promise<Products[]> {
    return await this.productModel.find().exec();
  }

  async getProductByID(id: string): Promise<Products> {
    const product = await this.productModel.findById(id);
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    // updateProductDto.images
    const updateProduct = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
    );
    return updateProduct;
  }

  async remove(id: string) {
    const deleteProduct = await this.productModel.findByIdAndDelete(id);
    return deleteProduct;

    // return `This action removes a #${id} product`;
  }
}
function ISODate(arg0: string) {
  throw new Error('Function not implemented.');
}
