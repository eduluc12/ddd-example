import { ICommandHandler, QueryHandler } from "@nestjs/cqrs";
import { GetUrlQuery } from "../queries/get";
import { GetShortUrlUseCase } from "../usecases/get";

@QueryHandler(GetUrlQuery)
export class GetUrlHandler implements ICommandHandler<GetUrlQuery> {
  constructor(private getShortUrlUseCase : GetShortUrlUseCase) {}

  async execute(command: GetUrlQuery) {
    const { id } = command;

    const result = await this.getShortUrlUseCase.execute(id);
    return result;
  }
  
}