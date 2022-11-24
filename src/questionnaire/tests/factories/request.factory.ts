import { faker } from '@faker-js/faker';
import { Factory } from 'rosie';

export const IdRequestFactory = Factory.define<{ id: string }>().attr(
  'id',
  faker.datatype.uuid,
);
