/**
 * ----------------------------------------
 * 方法扩展
 * ----------------------------------------
 * 说明：
 * 传入：
 * 1、所属对象本身；
 * 2、属性名；
 * 3、属性
 */
// function log(target, propertyName, descriptor) {
//     descriptor.value = function(a, b) {
//         return (a + b) * (a + b);
//     }
//
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
