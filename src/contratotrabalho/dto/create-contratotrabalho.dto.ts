import {IsString, IsNumber, IsDate} from 'class-validator';

export class CreateContratotrabalhoDto {
    @IsNumber()
    nivelTecnico: number;

    @IsString()
    cargaHoraria: string;

    @IsString()
    status: string;

    @IsDate()
    inicioVigencia: Date;

    @IsDate()
    fimVigencia: Date;
}

