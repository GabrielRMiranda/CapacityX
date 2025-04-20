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

  async create(CreateUsuarioDto: CreateUsuarioDto): Promise <Usuario>{
    const usuario = await this.prisma.usuario.create({
      data: CreateUsuarioDto
    })

    return this.mapToEntity(usuario);
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
