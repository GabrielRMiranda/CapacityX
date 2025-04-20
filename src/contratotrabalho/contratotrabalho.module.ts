import { Module } from '@nestjs/common';
import { ContratotrabalhoService } from './contratotrabalho.service';
import { ContratotrabalhoController } from './contratotrabalho.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ContratotrabalhoController],
  providers: [ContratotrabalhoService, PrismaService],
})
export class ContratotrabalhoModule {}
