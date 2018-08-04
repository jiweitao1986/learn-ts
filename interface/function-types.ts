// --------------------------------------------------------------------------------
// Function Types
// --------------------------------------------------------------------------------


console.log('\n\r\n\r');
console.log('----------------------------------------');
console.log('');
console.log('----------------------------------------');


// 接口定义
interface SearchFunc {
    (source: string, subString: string): boolean;
}


// 基本使用
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}



// 参数名称不需要匹配
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}


// 类型推断
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}