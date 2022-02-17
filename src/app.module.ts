import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, }), // When set to GLOBAl, ConfigModule does not need to be imported in other modules. It is visible everywhere.
        MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
        ProductsModule,
        UsersModule,],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
