import * as dynamoose from 'dynamoose'

export const ShortUrl = dynamoose.model(process.env.HIDE_TABLE, {"id": String, "redirect": String});