import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { QuestionnaireService } from './questionnaire/questionnaire.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly questionnaireService: QuestionnaireService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('questionnaire/:link')
  async getQuestionnaireLink(@Param('link') link: string) {
    const questionnaire = await this.questionnaireService.findByLink(link);
    return JSON.stringify(questionnaire);
  }
}
