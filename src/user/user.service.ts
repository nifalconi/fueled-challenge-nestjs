import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from 'src/types/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create({ email }: CreateUserInput) {
    return this.prisma.user.create({
      data: { email },
    });
  }

  // Note: not needed for the task but useful for testing
  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id: updateUserInput.id },
      data: updateUserInput,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
