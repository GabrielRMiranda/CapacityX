import { Injectable } from '@nestjs/common';
import { CreateContratotrabalhoDto } from './dto/create-contratotrabalho.dto';
import { UpdateContratotrabalhoDto } from './dto/update-contratotrabalho.dto';
import { Contratotrabalho } from './entities/contratotrabalho.entity';
import { PrismaService } from 'prisma/prisma.service';
import { contratotrabalho } from '@prisma/client';

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

  async findOne(id: number): Promise <Contratotrabalho> {
    const contratotrabalho = await this.prisma.contratotrabalho.findUnique({
      where: {
        id
      }
    });

    return this.mapToEntity(contratotrabalho);
  }

  async create(createContratotrabalhoDto: CreateContratotrabalhoDto): Promise <Contratotrabalho> {
    const contrato = await this.prisma.contratotrabalho.create({
      data: createContratotrabalhoDto
    })

    return this.mapToEntity(contrato);
  }

  async update(id: number, updateContratotrabalhoDto: UpdateContratotrabalhoDto): Promise <Contratotrabalho> {
    const contratotrabalho = await this.prisma.contratotrabalho.update({
      where: {
        id
      },
      data: {
        nivelTecnico: updateContratotrabalhoDto.nivelTecnico,
        cargaHoraria: updateContratotrabalhoDto.cargaHoraria,
        status: updateContratotrabalhoDto.status,
        inicioVigencia: updateContratotrabalhoDto.inicioVigencia,
        fimVigencia: updateContratotrabalhoDto.fimVigencia
      }
    });

    return this.mapToEntity(contratotrabalho);
  }

  async remove(id: number): Promise <contratotrabalho> {
    const contratotrabalho = await this.prisma.contratotrabalho.delete({
      where: {
        id
      }
    })

    return this.mapToEntity(contratotrabalho);
  }
}
