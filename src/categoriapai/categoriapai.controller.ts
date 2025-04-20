import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriapaiService } from './categoriapai.service';
import { CreateCategoriapaiDto } from './dto/create-categoriapai.dto';
import { UpdateCategoriapaiDto } from './dto/update-categoriapai.dto';

@Controller('categoriapai')
export class CategoriapaiController {
  constructor(private readonly categoriapaiService: CategoriapaiService) {}

  @Post()
  create(@Body() createCategoriapaiDto: CreateCategoriapaiDto) {
    return this.categoriapaiService.create(createCategoriapaiDto);
  }

  @Get()
  findAll() {
    return this.categoriapaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoriapaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCategoriapaiDto: UpdateCategoriapaiDto) {
    return this.categoriapaiService.update(+id, updateCategoriapaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoriapaiService.remove(+id);
  }
}
