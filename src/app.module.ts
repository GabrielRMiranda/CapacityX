import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContratotrabalhoModule } from './contratotrabalho/contratotrabalho.module';
import { CategoriapaiModule } from './categoriapai/categoriapai.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { TecnicoModule } from './tecnico/tecnico.module';

@Module({
  imports: [ContratotrabalhoModule, CategoriapaiModule, UsuarioModule, TecnologiaModule, TecnicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
