import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { configuration } from '../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({ 
            isGlobal: true, // When set to GLOBAl, ConfigModule does not need to be imported in other modules. It is visible everywhere.
            envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,  // process.cwd() is a handy command that provides the current working directory path
            load: [configuration]  }), 
        MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
        ProductsModule,
        UsersModule,],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
