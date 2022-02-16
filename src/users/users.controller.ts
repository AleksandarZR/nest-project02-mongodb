import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createCatDto: CreateUserDto) {
        await this.usersService.create(createCatDto);
        return this.usersService.findAll();
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}
