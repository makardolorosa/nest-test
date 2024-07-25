import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './catdtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto1: CreateCatDto) {
    return this.catsService.createcat(createCatDto1);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`;
  // }

  // // @Delete(':id')
  // // remove(@Param('id') id: string) {
  // //   return `This action removes a #${id} cat`;
  // }
}
