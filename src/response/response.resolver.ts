import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ResponseService } from './response.service';
import { CreateResponseInput } from './dto/create-response.input';
import { UpdateResponseInput } from './dto/update-response.input';

@Resolver('Response')
export class ResponseResolver {
  constructor(private readonly responseService: ResponseService) {}

  @Mutation('createResponse')
  create(@Args('createResponseInput') createResponseInput: CreateResponseInput) {
    return this.responseService.create(createResponseInput);
  }

  @Query('response')
  findAll() {
    return this.responseService.findAll();
  }

  @Query('response')
  findOne(@Args('id') id: number) {
    return this.responseService.findOne(id);
  }

  @Mutation('updateResponse')
  update(@Args('updateResponseInput') updateResponseInput: UpdateResponseInput) {
    return this.responseService.update(updateResponseInput.id, updateResponseInput);
  }

  @Mutation('removeResponse')
  remove(@Args('id') id: number) {
    return this.responseService.remove(id);
  }
}
