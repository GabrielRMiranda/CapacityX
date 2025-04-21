import { Injectable } from '@nestjs/common';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { Tecnico } from './entities/tecnico.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TecnicoService {

  constructor(private prisma: PrismaService){}

  private mapToEntity(tecnico: any){
    return{
      id: tecnico.id,
      id_usuario: tecnico.id_usuario,
      id_tecnologia: tecnico.id_tecnologia,
      knowhow: tecnico.knowhow,
      status: tecnico.status,
      dataInicio: tecnico.dataInicio,
      dataFim: tecnico.dataFim
    }
  }

  async findAll(): Promise<Tecnico[]>{
    const tecnico = await this.prisma.tecnico.findMany();

    return tecnico.map(
      tecnico => this.mapToEntity(tecnico)
    )
  }

  async findOne(id: number): Promise <Tecnico> {
    const tecnico = await this.prisma.tecnico.findUnique({
      where: {
        id
      }
    });

    return this.mapToEntity(tecnico);
  }

  async create(CreateTecnicoDto: CreateTecnicoDto): Promise<Tecnico>{
    const tecnico = await this.prisma.tecnico.create({
      data: CreateTecnicoDto
    })

    return this.mapToEntity(tecnico);
  }

  async update(id: number, updateTecnicoDto: UpdateTecnicoDto): Promise <Tecnico> {
    const tecnico = await this.prisma.tecnico.update({
      where: {
        id
      },
      data: {
        knowhow: updateTecnicoDto.knowhow,
        status: updateTecnicoDto.status,
        id_tecnologia: updateTecnicoDto.id_tecnologia,
        dataInicio: updateTecnicoDto.dataInicio,
        dataFim: updateTecnicoDto.dataFim,
      }
    })

    return this.mapToEntity(tecnico);
  }

  async remove(id: number): Promise <Tecnico> {
    const tecnico = await this.prisma.tecnico.delete({
      where: {
        id
      }
    })

    return this.mapToEntity(tecnico);
  }
}
