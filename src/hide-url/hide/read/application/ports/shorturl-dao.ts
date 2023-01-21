export abstract class ShortUrlDao{
    abstract getById(id : string) : Promise<string>
}