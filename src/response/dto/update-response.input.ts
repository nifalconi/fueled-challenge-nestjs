import { CreateResponseInput } from './create-response.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateResponseInput extends PartialType(CreateResponseInput) {
  id: number;
}
