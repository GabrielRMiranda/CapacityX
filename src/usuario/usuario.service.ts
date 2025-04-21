import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsuarioService {
  
  constructor(private prisma: PrismaService){}

  private mapToEntity(usuario: any){
    return{
      id: usuario.id,
      nome: usuario.nome,
      nivelAcesso: usuario.nivelAcesso,
      status: usuario.status,
      id_contratoTrabalho: usuario.id_contratoTrabalho,
      inicioVigencia: usuario.inicioVigencia,
      fimVigencia: usuario.fimVigencia,
    }
  }

  async findAll(): Promise<Usuario[]>{
    const usuario = await this.prisma.usuario.findMany();

    return usuario.map(
      usuario => this.mapToEntity(usuario)
    )
  }

  async findOne(id: number): Promise <Usuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id
      }
    })

    return this.mapToEntity(usuario);
  }

  async create(CreateUsuarioDto: CreateUsuarioDto): Promise <Usuario>{
    const usuario = await this.prisma.usuario.create({
      data: CreateUsuarioDto
    })

    return this.mapToEntity(usuario);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise <Usuario> {
    const usuario = await this.prisma.usuario.update({
      where:{
        id
      },
      data: {
        nome: updateUsuarioDto.nome,
        status: updateUsuarioDto.status,
        id_contratoTrabalho: updateUsuarioDto.id_contratoTrabalho,
        nivelAcesso: updateUsuarioDto.nivelAcesso,
        fimVigencia: updateUsuarioDto.fimVigencia
      }
    });

    return this.mapToEntity(usuario);
  }

  async remove(id: number): Promise <Usuario> {
    const usuario = await this.prisma.usuario.delete({
      where: {
        id
      }
    });

    return this.mapToEntity(usuario);
  }
}
