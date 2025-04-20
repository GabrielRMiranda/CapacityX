import {IsString, IsNumber, IsDate} from 'class-validator';

export class CreateTecnicoDto {
  @IsNumber()
  id_usuario: number;

  @IsNumber()
  id_tecnologia: number;

  @IsString()
  knowhow: string;

  @IsString()
  status: string;

  @IsDate()
  dataInicio: Date;

  @IsDate()
  dataFim: Date;
}
