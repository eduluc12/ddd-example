import { Repository } from "../../application/ports/repository";
import { ShortUrl } from "../../domain/shorturl";
import { ShortUrl as ShortUrlModel } from "../../domain/models/shorturl";
import { instanceToPlain } from 'class-transformer';

export class ShortUrlRepository extends Repository<ShortUrl>{

    async save(value: ShortUrl): Promise<void> {
        const instance = new ShortUrlModel(instanceToPlain(value));
        await instance.save();
    }

}