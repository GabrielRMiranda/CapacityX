import {IsString, IsDate} from 'class-validator';

export class CreateCategoriapaiDto {
  @IsString()
  descricao: string;

  @IsString()
  status: string;

  @IsDate()
  inicioVigencia: Date;

  @IsDate()
  fimVigencia: Date;
}
