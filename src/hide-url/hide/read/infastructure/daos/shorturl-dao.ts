import { Inject } from "@nestjs/common";
import { ShortUrlDao } from "../../application/ports/shorturl-dao";
import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

export class ShortUrlDaoImpl extends ShortUrlDao{

    constructor(
        @Inject('dynamodb') private dynamodb : DynamoDBClient
    ){
        super();
    }

    async getById(id: string): Promise<string> {
        const {
            Item
        } = await this.dynamodb.send(new GetItemCommand({
            Key: marshall({
                id
            }),
            TableName: process.env.HIDE_TABLE
        }));
        const result = unmarshall(Item);
        return result.redirect
    }

}