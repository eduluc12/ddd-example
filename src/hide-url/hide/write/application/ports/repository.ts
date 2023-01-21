// This could be in a top folder for sharing throughout our application
export abstract class Repository<T>{
    abstract save(value : T): Promise<void>
}