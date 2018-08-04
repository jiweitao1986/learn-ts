interface Person {
    name: string;
    age: number;
    location: string;
}

const person = {
    name: 'ZhangSan',
    age: 33,
    location: 'Zhang San Road'
}

// "name" | "age" | "location"
type K1 = keyof Person;
type K2 = keyof Person[];  // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string

//
// //const result = keyof Person;
// //console.log(result);

// const a = { k1: 1, k2: "v2" };
//
// // tv1 为number
// type tv1 = (typeof a)["k1"];
//
// // tv2 为string
// type tv2 = (typeof a)["k2"];
//
// // tv$ 为 (number|string): 属性名的并集对应到了属性值的类型的并集
// type tv$ = (typeof a)["k1" | "k2"];



