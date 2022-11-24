import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import {
  CreateQuestionnaireInput,
  Questionnaire,
  UpdateQuestionnaireInput,
} from '../types/graphql';
import { QuestionnaireService } from './questionnaire.service';

@Resolver('Questionnaire')
export class QuestionnaireResolver {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @Mutation('createQuestionnaire')
  create(
    @Args('createQuestionnaireInput')
    createQuestionnaireInput: CreateQuestionnaireInput,
  ) {
    return this.questionnaireService.create(createQuestionnaireInput);
  }

  @Query('questionnaires')
  findAll(@Args('userId') userId: string) {
    return this.questionnaireService.findAll(userId);
  }

  @Query('questionnaire')
  findOne(@Args('id returnType') id: string, returnType?: string) {
    const questionnaire = this.questionnaireService.findOne(id);

    if (returnType === 'json') {
      return JSON.stringify(questionnaire);
    }
    return questionnaire;
  }

  @Mutation('updateQuestionnaire')
  update(
    @Args('updateQuestionnaireInput')
    updateQuestionnaireInput: UpdateQuestionnaireInput,
  ) {
    return this.questionnaireService.update(
      updateQuestionnaireInput.id,
      updateQuestionnaireInput,
    );
  }

  @Mutation('removeQuestionnaire')
  remove(@Args('id') id: string) {
    return this.questionnaireService.remove(id);
  }

  @ResolveField('questions')
  getQuestions(@Parent() questionnaire: Questionnaire) {
    return this.questionnaireService.getQuestions(questionnaire.id);
  }
}
