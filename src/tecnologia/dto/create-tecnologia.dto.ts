import {IsString, IsNumber, IsDate} from 'class-validator';

export class CreateTecnologiaDto {
  @IsString()
  nome: string;

  @IsString()
  status: string;

  @IsNumber()
  id_usuarioResponsavel: number;

  @IsNumber()
  id_categoriaPai: number;

  @IsDate()
  inicioVigencia: Date;

  @IsDate()
  fimVigencia: Date;
}
