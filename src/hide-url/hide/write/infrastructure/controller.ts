import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { CreateNewUrlCommand } from "../application/commands/create";  

@Controller()
export class ShortUrlWriteController{

    constructor(
        private commandBus: CommandBus
    ){}

    @Post('urls')
    async index(
        @Body() body : {
            url: string
        }
    ){
        const generatedId = await this.commandBus.execute<CreateNewUrlCommand, string>(
            new CreateNewUrlCommand(body.url)
        );
        return {
            status: 'ok',
            data: {
                id: generatedId
            }
        }
    }

}