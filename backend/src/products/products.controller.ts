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
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

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
    try {
      createProductDto.images = files.map((file) => {
        return file.filename;
      });

      return await this.productsService.create(createProductDto);
    } catch (err) {
      if (err.code == 11000)
        throw new HttpException(
          `Product already exist can't create`,
          HttpStatus.FORBIDDEN,
        );
    }
  }
  // @Post('uploadImage')

  // uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log('FILES', files[0]);
  //   if (!files) {
  //     throw new BadRequestException('Files is not image');
  //   }
  // }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
