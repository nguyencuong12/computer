import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  BadRequestException,
  Query,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { FilterProductDTO } from './dto/filter-product.dto';

import { JwtAuthGuard } from '../auth/guard/jwt.guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorators/role.decorator';
import { Role } from '../auth/enums/role.enum';

import * as fs from 'fs';
import path from 'path';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @UseInterceptors(
    FilesInterceptor('files', null, {
      storage: diskStorage({
        destination: './images',
        filename: (req, file, cb) => {
          cb(null, `vn-${uuidv4()}${file.originalname}`);
        },
      }),
    }),
  )
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    //FIXME: ERROR REQUEST STILL ADDING IMAGES FIND SOLUTION TO BLOCK ADD IMAGES WHEN FACING ERROR !!
    try {
      if (files.length > 0) {
        createProductDto.images = files.map((file) => {
          return file.filename;
        });
      }
      return await this.productsService.create(createProductDto);
    } catch (err) {
      if (err.code == 11000)
        throw new HttpException(
          `Product already exist can't create`,
          HttpStatus.FORBIDDEN,
        );
    }
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin)
  @Get('')
  async getProducts(@Query() filterProductDTO: FilterProductDTO) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts =
        await this.productsService.getProductsWithFilter(filterProductDTO);

      return filteredProducts;
    } else {
      return await this.productsService.getAllProducts();
    }
  }

  @Get(':id')
  getProductByID(@Param('id') id: string) {
    const product = this.productsService.getProductByID(id);
    if (!product) throw new NotFoundException('Product does not exist!');
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    console.log('ID', id);
    // return this.productsService.update(+id, updateProductDto);
    const product = await this.productsService.update(id, updateProductDto);
    if (!product) throw new NotFoundException('Product does not exist!');
    return product;
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    let product = await this.productsService.remove(id);
    if (!product) throw new NotFoundException('Product does not exist');
  }
}
