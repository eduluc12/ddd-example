import { Controller, Get, HttpCode, Param, Res } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { GetUrlQuery } from "../application/queries/get";  
import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { Response } from 'express';

@Controller()
export class ShortUrlReadController{

    constructor(
        private queryBus: QueryBus
    ){}

    @Get('urls/:id')
    @HttpCode(301)
    async index(
        @Param('id') id: string,
        @Res() res : Response
    ){
        const url = await this.queryBus.execute<GetUrlQuery, string>(
            new GetUrlQuery(id)
        );
        res.set('Location', url).send('');
    }

}