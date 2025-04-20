import { Injectable } from '@nestjs/common';
import { CreateContratotrabalhoDto } from './dto/create-contratotrabalho.dto';
import { UpdateContratotrabalhoDto } from './dto/update-contratotrabalho.dto';
import { Contratotrabalho } from './entities/contratotrabalho.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ContratotrabalhoService {
  
  constructor(private prisma: PrismaService){}

  private mapToEntity(contratotrabalho: any){
    return {
      id: contratotrabalho.id,
      nivelTecnico: contratotrabalho.nivelTecnico,
      cargaHoraria: contratotrabalho.cargaHoraria,
      status: contratotrabalho.status,
      inicioVigencia: contratotrabalho.inicioVigencia,
      fimVigencia: contratotrabalho.fimVigencia,
    }
  }
  
  async findAll(): Promise <Contratotrabalho[]> {
    const contrato = await this.prisma.contratotrabalho.findMany();

    return contrato.map(
      contrato => this.mapToEntity(contrato)
    )
  }

  async create(createContratotrabalhoDto: CreateContratotrabalhoDto): Promise <Contratotrabalho> {
    const contrato = await this.prisma.contratotrabalho.create({
      data: createContratotrabalhoDto
    })

    return this.mapToEntity(contrato);
  }

  findOne(id: number) {
    return `This action returns a #${id} contratotrabalho`;
  }

  update(id: number, updateContratotrabalhoDto: UpdateContratotrabalhoDto) {
    return `This action updates a #${id} contratotrabalho`;
  }

  remove(id: number) {
    return `This action removes a #${id} contratotrabalho`;
  }
}
