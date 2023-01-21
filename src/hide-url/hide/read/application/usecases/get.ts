import { Injectable } from "@nestjs/common";
import { ShortUrlDao } from "../ports/shorturl-dao";

@Injectable()
export class GetShortUrlUseCase{

    constructor(
        private shortUrlDao : ShortUrlDao
    ){}
    
    async execute(id : string){
        return this.shortUrlDao.getById(id);
    }

}