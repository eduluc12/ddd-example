import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import serverlessExpress from "@vendia/serverless-express";
import { ShortenModule } from "./hide-url/hide/module";

let serverlessExpressInstance : any;

export const handler = async (event : any, context : any) => {
    if(serverlessExpressInstance) return serverlessExpressInstance(event, context);
    const app = await NestFactory.create<NestExpressApplication>(ShortenModule, {
        logger: false
    });
    await app.init();
    const serverlessInstance = serverlessExpress({
        app: app.getHttpAdapter().getInstance()
    });
    serverlessExpressInstance = serverlessInstance;
    return serverlessExpressInstance(event, context);
}