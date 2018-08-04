/*
 * ----------------------------------------
 * 方法扩展
 * ----------------------------------------
 * 说明：
 * 传入：
 * 1、所属对象本身；
 * 2、属性名；
 * 3、属性
 * {
 *      value,
 *      writable,
 *      get,
 *      set,
 *      configurable,
 *      enumerable
  * }
 */








/**
 * ----------------------------------------
 * enumerable decorator
 * ----------------------------------------
 */
class Greeter {

    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

/**
 * 装饰器
 * @param value
 */
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

const greeter = new Greeter('ZhangSan');
for (prop in greeter) {
    console.log(prop);
}

// 输出
//greeting

// greet的enumerable的被设置为false，通过for in不能便利







/**
 * ----------------------------------------
 * log decorator
 * ----------------------------------------
 */

class Caculator {
    add(x: number, y: number) {
        return x + y;
    }
}

function log(target: Object, propName: string, descriptor: TypedPropertyDescriptor) {
    const origin = descriptor.value;
    descriptor.value = function(x, y) {
        console.log('before add');

        return origin(x, y);

        console.log('after add');
    }
}


































// function log(target, propertyName, descriptor) {
//     descriptor.value = function(a, b) {
//         return (a + b) * (a + b);
//     }
//     return descriptor;
//
// }



//
//
// function addAndMulti(target, propertyName, descriptor) {
//     descriptor.value = function(a, b) {
//         return (a + b) * (a + b);
//     }
//
//     return descriptor;
//
// }
//
//
//
// class CustomMath {
//
//     @log
//     add(a, b) {
//         return a + b;
//     }
// }
//
// const math = new CustomMath();
//
// console.log(math.add(1, 2));





// function getOwnPropertyDescriptors(obj) {
//     const result = {};
//     for (let key of Reflect.ownKeys(obj)) {
//         result[key] = Object.getOwnPropertyDescriptor(obj, key);
//     }
//     return result;
// }
//
// var o = {"first": 1}; // 创建一个新对象
//
// // 在对象中添加一个属性与数据描述符的示例
// Object.defineProperty(o, "second", {
//     value : 2,
//     writable : true,
//     enumerable : true,
//     configurable : false
// });
// o['second'] = 3;
// delete o['second'];
// console.log(o);


// class Person {
//     @readonly
//     name() { return `${this.first} ${this.last}` }
// }


