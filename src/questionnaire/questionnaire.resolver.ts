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
} from 'src/types/graphql';
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

  @Query('questionnaire')
  findAll(@Args('id') id: string) {
    return this.questionnaireService.findAll(id);
  }

  @Query('questionnaire')
  findOne(@Args('id') id: string) {
    return this.questionnaireService.findOne(id);
  }

  @Query('getJsonQuestionnaire')
  async findJsonOne(@Args('id') id: string) {
    const questionnaire = await this.questionnaireService.findOne(id);

    return JSON.stringify(questionnaire);
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
