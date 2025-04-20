import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriapaiDto } from './create-categoriapai.dto';

export class UpdateCategoriapaiDto extends PartialType(CreateCategoriapaiDto) {
  
}
