/**
 * --------------------------------------------------------------------------------
 * 数字索引
 * --------------------------------------------------------------------------------
 */
interface StringArray {
  [index: number]: string;
}

let strArr: StringArray;
strArr = ["Bob", "Fred"];
let bob: string = strArr[0];


/**
 * --------------------------------------------------------------------------------
 * 字符串索引
 * --------------------------------------------------------------------------------
 */

interface StrNumDict {
  [key: string]: number;
}
let numDict: StrNumDict = {
  first: 1,
  second: 2,
  third: 3
}
let third: number = numDict.third;


/**
 * --------------------------------------------------------------------------------
 * 数字、字符串混合索引
 * --------------------------------------------------------------------------------
 */
class Animal {
  name: string;
}
class Dog extends Animal {
    breed: string;
}

// There are two types of supported index signatures: string and number.
// It is possible to support both types of indexers,
// but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer.
// This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object.
// That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.
// 索引接口支持两种类型的索引签名：字符串和数组；
// 在一个索引接口中可以同时支持两种类型的key，但是数字索引对应值必须是字符索引对应值的子集。
// 这是因为当我们用number作为索引的时候，实际上js会将number转换成一个string，这意味着索引是100和索引"100"是一样的，我们需要保持一致。

// 错误的定义：
// Error: indexing with a numeric string might get you a completely separate type of Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

// 正确的定义：
// 【number indexer】对应的Dog 是 【string indexer】对应的Animal的子类。
interface Okay {
    [x: number]: Dog;
    [x: string]: Animal;
}