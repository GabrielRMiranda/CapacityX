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

  async create(CreateTecnicoDto: CreateTecnicoDto): Promise<Tecnico>{
    const tecnico = await this.prisma.tecnico.create({
      data: CreateTecnicoDto
    })

    return this.mapToEntity(tecnico);
  }

  findOne(id: number) {
    return `This action returns a #${id} tecnico`;
  }

  update(id: number, updateTecnicoDto: UpdateTecnicoDto) {
    return `This action updates a #${id} tecnico`;
  }

  remove(id: number) {
    return `This action removes a #${id} tecnico`;
  }
}
