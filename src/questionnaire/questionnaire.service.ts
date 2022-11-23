import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateQuestionnaireInput,
  UpdateQuestionnaireInput,
} from 'src/types/graphql';

@Injectable()
export class QuestionnaireService {
  constructor(private prisma: PrismaService) {}

  async create({ userId, title, questions }: CreateQuestionnaireInput) {
    const savedQuestionnaire = await this.prisma.questionnaire.create({
      data: {
        title,
        userId,
        questions: {
          create: questions.map((question) => ({
            title: question.title,
            order: question.order,
            questionType: question.questionType,
          })),
        },
      },
    });

    return savedQuestionnaire;
  }

  findAll(id: string) {
    return this.prisma.questionnaire.findMany({ where: { userId: id } });
  }

  findOne(id: string) {
    return this.prisma.questionnaire.findUnique({
      where: { id },
      include: { questions: true },
    });
  }

  update(id: string, updateQuestionnaireInput: UpdateQuestionnaireInput) {
    const { title, questions } = updateQuestionnaireInput;

    const updatedQuestionnaire = this.prisma.questionnaire.update({
      where: { id },
      data: {
        title: title,
        questions: {
          deleteMany: {},
          create: questions.map((question) => ({
            title: question.title,
            order: question.order,
            questionType: question.questionType,
          })),
        },
      },
    });

    return updatedQuestionnaire;
  }

  remove(id: string) {
    return this.prisma.questionnaire.delete({ where: { id } });
  }

  getQuestions(id: string) {
    return this.prisma.question.findMany({ where: { questionnaireId: id } });
  }
}
