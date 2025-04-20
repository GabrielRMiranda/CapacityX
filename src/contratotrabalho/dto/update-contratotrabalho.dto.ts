import { PartialType } from '@nestjs/mapped-types';
import { CreateContratotrabalhoDto } from './create-contratotrabalho.dto';

export class UpdateContratotrabalhoDto extends PartialType(CreateContratotrabalhoDto) {}
