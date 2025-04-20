import { Injectable } from '@nestjs/common';
import { CreateCategoriapaiDto } from './dto/create-categoriapai.dto';
import { UpdateCategoriapaiDto } from './dto/update-categoriapai.dto';
import { Categoriapai } from './entities/categoriapai.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoriapaiService {

  constructor(private prisma: PrismaService) {}

  private mapToEntity(categoriapai: any) {
    return {
      id: categoriapai.id,
      descricao: categoriapai.descricao,
      status: categoriapai.status,
      inicioVigencia: categoriapai.inicioVigencia,
      fimVigencia: categoriapai.fimVigencia,
    }
  }

  async findAll(): Promise <Categoriapai[]>{
    const categoriaPai = await this.prisma.categoriapai.findMany();

    return categoriaPai.map(
      categoriapai => this.mapToEntity(categoriapai)
    )
  }

  async findOne(id: number): Promise <Categoriapai> {
    
    const categoriapai = await this.prisma.categoriapai.findUnique({
      where: {
        id
      }
    })

    return this.mapToEntity(categoriapai);

    //return `This action returns a #${id} categoriapai`;
  }

  async create(CreateCategoriapaiDto: CreateCategoriapaiDto): Promise <Categoriapai> {
    const categoriapai = await this.prisma.categoriapai.create({
      data: CreateCategoriapaiDto
    })

    return this.mapToEntity(categoriapai);
  }

  async update(id: number, updateCategoriapaiDto: UpdateCategoriapaiDto): Promise<Categoriapai> {
    const categoriapai = await this.prisma.categoriapai.update({
      where: {
        id
      },
      data: {
        descricao: updateCategoriapaiDto.descricao,
        status: updateCategoriapaiDto.status,
        inicioVigencia: updateCategoriapaiDto.inicioVigencia,
        fimVigencia: updateCategoriapaiDto.fimVigencia,
      }
    })

    return this.mapToEntity(categoriapai);
  }

  async remove(id: number): Promise <Categoriapai> {

    const categoriaPai = await this.prisma.categoriapai.delete({
      where: {
        id
      }
    })

    return this.mapToEntity(categoriaPai);
  }
}
