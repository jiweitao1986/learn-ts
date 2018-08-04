import 'reflect-metadata';

function Name(name) {
    return function(cls) {
        Reflect.defineMetadata('name', name, cls);
    }
}

function Key() {
    return function(cls, propertyKey) {
        console.log(propertyKey);
        Reflect.defineMetadata('key', 'hello', cls);
    }
}


@Name('Emp')
@Key()
class Emp {
    id: string;
    code: string;
    name: string;
}


console.log(Reflect.getMetadata('name', Emp));
console.log(Reflect.getMetadata('key', Emp));
