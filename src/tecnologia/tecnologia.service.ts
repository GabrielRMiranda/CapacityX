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

  async create(CreateTecnologiaDto: CreateTecnologiaDto): Promise <Tecnologia>{
    const tecnologia = await this.prisma.tecnologia.create({
      data: CreateTecnologiaDto
    })

    return this.mapToEntity(tecnologia);
  }

  findOne(id: number) {
    return `This action returns a #${id} tecnologia`;
  }

  update(id: number, updateTecnologiaDto: UpdateTecnologiaDto) {
    return `This action updates a #${id} tecnologia`;
  }

  remove(id: number) {
    return `This action removes a #${id} tecnologia`;
  }
}
