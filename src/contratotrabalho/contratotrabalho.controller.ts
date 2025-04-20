import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContratotrabalhoService } from './contratotrabalho.service';
import { CreateContratotrabalhoDto } from './dto/create-contratotrabalho.dto';
import { UpdateContratotrabalhoDto } from './dto/update-contratotrabalho.dto';

@Controller('contratotrabalho')
export class ContratotrabalhoController {
  constructor(private readonly contratotrabalhoService: ContratotrabalhoService) {}

  @Post()
  create(@Body() createContratotrabalhoDto: CreateContratotrabalhoDto) {
    return this.contratotrabalhoService.create(createContratotrabalhoDto);
  }

  @Get()
  findAll() {
    return this.contratotrabalhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contratotrabalhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContratotrabalhoDto: UpdateContratotrabalhoDto) {
    return this.contratotrabalhoService.update(+id, updateContratotrabalhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contratotrabalhoService.remove(+id);
  }
}
