import { Module } from "@nestjs/common";
import { ShortenReadModule } from "./read/infastructure/module";
import { ShortenWriteModule } from "./write/infrastructure/module";

@Module({
    imports: [
        ShortenReadModule,
        ShortenWriteModule
    ]
})
export class ShortenModule{}