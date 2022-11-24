import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';

/* 
This is an integration test that uses pactum to test the API.
It does not mock anything and uses the real dev database which needs to be running.

It tests that: 
- It tests the API by making graphql requests.
- Those request are resolved correctly. 
- The services are called with the correct arguments.
- The database connection is working.

TODO: It's a work in progress. And due to lack of time it's not finished.
TODO: It can only test the happy path. It does not test the error handling.
*/

describe('GraphQl Resolver (e2e)', () => {
  let app: INestApplication;
  let url: string;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();

    app = module.createNestApplication();
    await app.listen(0);
    url = await app.getUrl();
    pactum.request.setBaseUrl(url.replace('[::1]', 'localhost'));
  });

  afterAll(async () => {
    await app.close();
  });

  describe('graphQl', () => {
    it.todo('should create and delete an user', async () => {
      const newUser = {
        email: 'testt@test.test',
        name: 'Juan Kenobi',
      };

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { body } = await pactum
        .spec()
        .post('/graphql')
        .withGraphQLQuery(
          `mutation CreateUser($createUserInput: CreateUserInput!) {
            createUser(createUserInput: $createUserInput) {
              id
              name
              email
            }
          }`,
        )
        .withGraphQLVariables({
          createUserInput: newUser,
        })
        .expectStatus(200);
    });
  });
});
