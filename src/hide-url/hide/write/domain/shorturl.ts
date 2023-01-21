import {nanoid} from 'nanoid';
import { Expose } from 'class-transformer';

// Our aggregate root for this case
export class ShortUrl{
    @Expose()
    id: string
    @Expose()
    redirect: string

    static create(url : string){
        const instance = new ShortUrl();
        instance.id = nanoid(8);
        instance.redirect = url;
        return instance
    }

    // Your business logic here ...

}