import { faker } from '@faker-js/faker';
import { Factory } from 'rosie';

export const QuestionnaireFactory = new Factory()
  .sequence('id')
  .attr('title', () => faker.lorem.sentence())
  .attr('link', () => faker.datatype.uuid())
  .attr('userId', () => faker.datatype.uuid())
  .attr('questions', () => [
    {
      title: faker.lorem.sentence(),
      order: faker.datatype.number(),
      questionType: 'DROPDOWN',
    },
  ]);
