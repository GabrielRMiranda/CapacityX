import { Injectable } from '@nestjs/common';
import { CreateTecnologiaDto } from './dto/create-tecnologia.dto';
import { UpdateTecnologiaDto } from './dto/update-tecnologia.dto';
import { Tecnologia } from './entities/tecnologia.entity';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class TecnologiaService {
 
  constructor(private prisma: PrismaService){}

  private mapToEntity(tecnologia: any){
    return{
      id: tecnologia.id,
      nome: tecnologia.nome,
      status: tecnologia.status,
      id_usuarioResponsavel: tecnologia.id_usuarioResponsavel,
      id_categoriaPai: tecnologia.id_categoriaPai,
      inicioVigencia: tecnologia.inicioVigencia,
      fimVigencia: tecnologia.fimVigencia,
    }
  }

  async findAll(): Promise<Tecnologia[]>{
    const tecnologia = await this.prisma.tecnologia.findMany();

    return tecnologia.map(
      tecnologia => this.mapToEntity(tecnologia)
    )
  }

  async findOne(id: number): Promise <Tecnologia> {
    const tecnologia = await this.prisma.tecnologia.findUnique({
      where: {
        id
      }
    });

    return this.mapToEntity(tecnologia);
  }

  async create(CreateTecnologiaDto: CreateTecnologiaDto): Promise <Tecnologia>{
    const tecnologia = await this.prisma.tecnologia.create({
      data: CreateTecnologiaDto
    })

    return this.mapToEntity(tecnologia);
  }

  async update(id: number, updateTecnologiaDto: UpdateTecnologiaDto): Promise <Tecnologia> {
    const tecnologia = await this.prisma.tecnologia.update({
      where: {
        id
      },
      data:{
        nome: updateTecnologiaDto.nome,
        status: updateTecnologiaDto.status,
        id_usuarioResponsavel: updateTecnologiaDto.id_usuarioResponsavel,
        id_categoriaPai: updateTecnologiaDto.id_categoriaPai,
        fimVigencia: updateTecnologiaDto.fimVigencia
      }
    });

    return this.mapToEntity(tecnologia);
  }

  async remove(id: number): Promise <Tecnologia> {
    const tecnologia = await this.prisma.tecnologia.delete({
      where: {
        id
      }
    });

    return this.mapToEntity(tecnologia);
  }
}