import {IsString, IsNumber, IsDate} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nome: string;

  @IsNumber()
  nivelAcesso: number;

  @IsString()
  status: string;

  @IsNumber()
  id_contratoTrabalho: number;

  @IsDate()
  inicioVigencia: Date;

  @IsDate()
  fimVigencia: Date;
}