
## Description

Code challenge for Fueled for the position of Backend Engineer.

## Getting Started

To install the packages.

```bash
yarn
```

## Running the app and database

```bash
# development
$ yarn run start

# run postgres database
docker-compose up
```

## Features

The list of features that you can expect from the challenge are the following. 

- [x] Create questionnaires with owner, title, and any number of questions.
- [x] Create and Update questionnaires, with owner, title, and any number of questions.
- [x] Delete or re-order any questions in the questionnaire.
- [x] Implement only question types, assume other may exist.

Due to lack of time I decided not to implement user authentication as it was an isolated resource which [Nest offers support](https://docs.nestjs.com/security/authentication#authentication). Nevertheless, the user resource is already created. It just lacks authentication.

- [ ] Ability to retrieve an authentication token.
- [ ] A questionnaire can only retrieve and edit by the user that owns it.

## Project Structure

```txt
src                                                                      
├─ resource                         
│  ├─ tests    // resource's tests                          
│  │  ├─ factories                       
│  ├─ resource.graphql              
│  ├─ resource.module.ts            
│  ├─ resource.resolver.ts          
│  └─ resource.service.ts                                      
test // integration tests
```

## How to use

### GraphQl Endpoints

The GraphQL endpoints are the following.

```graphql
  Questionnaires Queries
  getQuestionnaireFromLink(link: String!): JSONObject
  questionnaires(userId: String!): [Questionnaire]
  questionnaire(id: String!, returnType: String): Questionnaire

  Questionnaires Mutations
  createQuestionnaire(createQuestionnaireInput: CreateQuestionnaireInput!): Questionnaire!
  updateQuestionnaire(updateQuestionnaireInput: UpdateQuestionnaireInput!): Questionnaire!
  removeQuestionnaire(id: String!): Questionnaire

  User Queries
  users: [User]!
  user(id: String!): User

  User Mutations
  createUser(createUserInput: CreateUserInput!): User!
  updateUser(updateUserInput: UpdateUserInput!): User!
  removeUser(id: String!): User

```

### Rest Endpoints

```rest
GET questionnaire/{questionnaire_link}: JSON 
```


## Test

Two different kind of tests are shown in this project. Unit tests, that can be found `src/questionnaire/tests/questionnaire.resolver.spec.ts`, and integration tests on `test/integration.spec.ts`. Due to lack of time, only those are provided as those are a great example of what is expected from a real project.

```bash
# test coverages
$ yarn run test:cov
```

## Tools

__Database__

- Prisma
- Postgres

__Framework__

- Nest

__API__

- Graphql
- Rest

__Testing__

- Jest
- Rosie
- Pactum

## License

Nest is [MIT licensed](LICENSE).

## Author

Nicolás Falconi