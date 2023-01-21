import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateNewUrlCommand } from "../commands/create";
import { CreateShortUrlUseCase } from "../usecases/create";

@CommandHandler(CreateNewUrlCommand)
export class CreateNewUrlHandler implements ICommandHandler<CreateNewUrlCommand> {
  constructor(private createShortUrlUseCase : CreateShortUrlUseCase) {}

  async execute(command: CreateNewUrlCommand) {
    const { url } = command;

    const result = await this.createShortUrlUseCase.execute(url);
    return result;
  }
  
}