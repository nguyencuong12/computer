import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SearchModule } from './search/search.module';
import config from './config/keys';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

// MongooseModule.forRoot('mongodb://localhost/fishing')

@Module({
  imports: [

    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
      
    //   serveStaticOptions: {
        
       
    //     index: false,
    //   },
    // }),
    MongooseModule.forRoot(config.mongoURI),
    ProductsModule,
    CategoriesModule,
    SearchModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
