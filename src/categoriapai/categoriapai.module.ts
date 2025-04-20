import { Module } from '@nestjs/common';
import { CategoriapaiService } from './categoriapai.service';
import { CategoriapaiController } from './categoriapai.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CategoriapaiController],
  providers: [CategoriapaiService, PrismaService],
})
export class CategoriapaiModule {}
