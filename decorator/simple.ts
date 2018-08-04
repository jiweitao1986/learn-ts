// /**
//  * ----------------------------------------
//  * 类装饰器：修改静态属性
//  * ----------------------------------------
//  */
// console.log('\n\n----------Class Extend----------');
//

//
//
// /**
//  * ----------------------------------------
//  * 类装饰器：扩展方法
//  * ----------------------------------------
//  */
// console.log('\n\n----------Class Extend----------');
//
// // var obj = Object.assign({}, {first: 1});
// // console.log(obj);
//
// function mixins(...list) {
//     return function (target) {
//         Object.assign(target.prototype, ...list);
//         console.log(target.prototype);
//
//     }
// }
//
// const Foo = {
//     foo() {
//         console.log('----foo----')
//     }
// };
//
// @mixins(Foo)
// class MyClass {}
//
// let obj = new MyClass();
// obj['foo']();
//
//
//
//
//
//
//
//
//
