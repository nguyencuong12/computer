import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SearchModule } from './search/search.module';
import config from './config/keys';

// MongooseModule.forRoot('mongodb://localhost/fishing')

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    ProductsModule,
    CategoriesModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
