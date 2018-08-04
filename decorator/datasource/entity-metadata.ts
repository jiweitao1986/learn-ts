import 'reflect-metadata';


// @Reflect.metadata('name', 'PersonName')
// class Person {
//     @Reflect.metadata('name', 'idName')
//     id: string;
// }

// console.log(Reflect.getMetadata('name', Person));
//
// const p = new Person();
// console.log(Reflect.getMetadata('name', p, 'id'));


@Type('Person')
class Person {
    id: string;
}


function Type(type) {
    return Reflect.metadata("design:type", type);
}
function ParamTypes(...types) {
    return Reflect.metadata("design:paramtypes", types);
}
function ReturnType(type) {
    return Reflect.metadata("design:returntype", type);
}

const p = new Person();

console.log(Reflect.getMetadata("design:type", Person));
console.log(Reflect.getMetadata("design:type", p, 'id'));



