import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { QuestionnaireResolver } from '../questionnaire.resolver';
import { QuestionnaireService } from '../questionnaire.service';
import { IdRequestFactory } from './factories/request.factory';
import { QuestionnaireFactory } from './factories/questionnaire.factory';

describe('QuestionnaireResolver', () => {
  let resolver: QuestionnaireResolver;
  let questionnaireService: QuestionnaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionnaireResolver, QuestionnaireService, PrismaService],
    }).compile();

    resolver = module.get<QuestionnaireResolver>(QuestionnaireResolver);
    questionnaireService =
      module.get<QuestionnaireService>(QuestionnaireService);
  });

  it('resolver be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('find a questionnaire by id', async () => {
    const requestedId = IdRequestFactory.build();
    const expectedResponse = QuestionnaireFactory.build();

    jest
      .spyOn(questionnaireService, 'findOne')
      .mockImplementation(() => expectedResponse);

    const response = await resolver.findOne(requestedId);

    expect(questionnaireService.findOne).toHaveBeenCalledWith(requestedId);
    expect(response).toEqual(expectedResponse);
  });

  it('find questionnaires by user id and return it as a json if requested', async () => {
    const requestedId = IdRequestFactory.build();
    const expectedResponse = JSON.stringify(QuestionnaireFactory.build());

    jest
      .spyOn(questionnaireService, 'findOne')
      .mockImplementation(() => expectedResponse as any);

    const response = (await resolver.findOne(requestedId, 'json')) as string;

    expect(questionnaireService.findOne).toHaveBeenCalledWith(requestedId);
    expect(JSON.parse(response)).toEqual(expectedResponse);
  });

  it('find all questionnaires', async () => {
    const userId = IdRequestFactory.build();
    const expectedResponse = QuestionnaireFactory.buildList();

    jest
      .spyOn(questionnaireService, 'findAll')
      .mockImplementation(() => expectedResponse);

    const response = await resolver.findAll(userId);

    expect(questionnaireService.findAll).toHaveBeenCalledWith(userId);
    expect(response).toEqual(expectedResponse);
  });

  it('create questionnaire', async () => {
    const questionnaire = QuestionnaireFactory.build();

    jest.spyOn(questionnaireService, 'create').mockImplementation();

    await resolver.create(questionnaire);

    expect(questionnaireService.create).toHaveBeenCalledWith(questionnaire);
  });

  it('update questionnaire', async () => {
    const newQuestionnaire = QuestionnaireFactory.build();

    jest
      .spyOn(questionnaireService, 'update')
      .mockImplementation(() => newQuestionnaire);

    const response = await resolver.update(newQuestionnaire);

    expect(questionnaireService.update).toHaveBeenCalledWith(
      newQuestionnaire.id,
      newQuestionnaire,
    );
    expect(response).toEqual(newQuestionnaire);
  });

  it('remove questionnaire', async () => {
    const id = IdRequestFactory.build();

    jest.spyOn(questionnaireService, 'remove').mockImplementation();

    await resolver.remove(id);

    expect(questionnaireService.remove).toHaveBeenCalledWith(id);
  });

  it('find questions by questionnaire id', async () => {
    const expectedResponse = QuestionnaireFactory.build();

    jest
      .spyOn(questionnaireService, 'getQuestions')
      .mockImplementation(() => expectedResponse.questions);

    const response = await resolver.getQuestions(expectedResponse);

    expect(questionnaireService.getQuestions).toHaveBeenCalledWith(
      expectedResponse.id,
    );
    expect(response).toEqual(expectedResponse.questions);
  });
});
