import { Module } from '@nestjs/common';
import { TecnologiaService } from './tecnologia.service';
import { TecnologiaController } from './tecnologia.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TecnologiaController],
  providers: [TecnologiaService, PrismaService],
})
export class TecnologiaModule {}
