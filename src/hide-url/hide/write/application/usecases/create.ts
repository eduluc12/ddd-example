import { Injectable } from "@nestjs/common";
import { ShortUrl } from "../../domain/shorturl";
import { Repository } from "../ports/repository";

@Injectable()
export class CreateShortUrlUseCase{

    constructor(
        private shortUrlRepository : Repository<ShortUrl>
    ){}
    
    async execute(url : string){
        const instance = ShortUrl.create(url);
        await this.shortUrlRepository.save(instance);
        return instance.id;
    }

}