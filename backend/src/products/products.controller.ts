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
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { FilterProductDTO } from './dto/filter-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
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
      createProductDto.images = files.map((file) => {
        return file.filename;
      });
      return await this.productsService.create(createProductDto);
    } catch (err) {
      console.log('ERROR CALL');
      if (err.code == 11000)
        throw new HttpException(
          `Product already exist can't create`,
          HttpStatus.FORBIDDEN,
        );
    }
  }
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

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    // return this.productsService.update(+id, updateProductDto);

    const product = await this.productsService.update(id, updateProductDto);
    if (!product) throw new NotFoundException('Product does not exist!');
    return product;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    let product = await this.productsService.remove(id);
    if (!product) throw new NotFoundException('Product does not exist');
  }
}
