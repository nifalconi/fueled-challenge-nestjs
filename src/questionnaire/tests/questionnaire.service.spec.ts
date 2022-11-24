import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { QuestionnaireService } from '../questionnaire.service';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionnaireService, PrismaService],
    }).compile();

    service = module.get<QuestionnaireService>(QuestionnaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
