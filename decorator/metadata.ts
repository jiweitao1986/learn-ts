import 'reflect-metadata';


// --------------------------------------------------------------------------------
// ComponentDecorator
// --------------------------------------------------------------------------------

// function ComponentDecorator(_props) {
//     return function (cls) {
//         Reflect.defineMetadata('annotations', [_props], cls);
//     }
// }
//
// function OtherComponentDecorator(_props) {
//     return function (cls) {
//         Reflect.defineMetadata('other_annotations', [_props], cls.prototype);
//     }
// }
//
// @ComponentDecorator({
//     selector: 'app-simple2',
//     template: '<span>I am a component2</span>',
// })
// @OtherComponentDecorator({
//     selector: 'app-simple',
//     template: '<span>I am a other component</span>',
// })
// class SimpleComponent {
// }
//
// const c = new SimpleComponent();
//
//
// console.log(SimpleComponent[]);
// console.log(Reflect.getMetadataKeys(SimpleComponent));
// console.log(Reflect.getMetadataKeys(c));





function GetPropNames(cls) {
    const p = new cls();
    const names = Reflect.getMetadata('propertyNames', p);
    console.log(names);
}

function Name(name) {
    return function(target) {
        Reflect.defineMetadata('propertyNames', ['id', 'name'], target);
    }
}


@GetPropNames
class Person {

    @Name('id')
    id: string;

    @Name('name')
    name: string;
}

// var p = new Person();
// console.log(Reflect.getMetadata('propertyNames', p));
