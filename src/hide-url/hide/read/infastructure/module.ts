import { Module } from "@nestjs/common";
import { GetUrlHandler } from "../application/handlers/get";
import { ShortUrlDao } from "../application/ports/shorturl-dao";
import { GetShortUrlUseCase } from "../application/usecases/get";
import { ShortUrlReadController } from "./controller";
import { ShortUrlDaoImpl } from "./daos/shorturl-dao";
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { CqrsModule } from "@nestjs/cqrs";

@Module({
    controllers: [ShortUrlReadController],
    imports: [CqrsModule],
    providers: [
        GetUrlHandler,
        GetShortUrlUseCase,
        {
            provide: ShortUrlDao,
            useClass: ShortUrlDaoImpl
        },
        {
            provide: 'dynamodb',
            useValue: new DynamoDBClient({})
        } // Also you can create a global module for AWS as an option
    ],
})
export class ShortenReadModule{}