import { Module } from "@nestjs/common";
import { CommandBus, CqrsModule } from "@nestjs/cqrs";
import { CreateNewUrlHandler } from "../application/handlers/create";
import { Repository } from "../application/ports/repository";
import { CreateShortUrlUseCase } from "../application/usecases/create";
import { ShortUrlWriteController } from "./controller";
import { ShortUrlRepository } from "./repositories/shorturl";

@Module({
    controllers: [ShortUrlWriteController],
    imports: [CqrsModule],
    providers: [
        CreateNewUrlHandler,
        CreateShortUrlUseCase,
        {
            provide: Repository,
            useClass: ShortUrlRepository
        }
    ],
})
export class ShortenWriteModule{}