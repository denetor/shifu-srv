import {Controller, Get, Post, Patch, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.usersService.findAll();
    }
}
