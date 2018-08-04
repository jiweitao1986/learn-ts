// // function identity<T>(arg: T): T {
// //      return arg;
// // }
// //
// // const result: string = identity<number>(10);
// // console.log(result);
//
//
// /**
//  * function interface: Selector
//  */
// export interface Selector<T, V> {
//     (state: T): V;
// }
//
//
// /**
//  * type alias: AnyFn
//  */
// export type AnyFn = (...args: any[]) => any;
//
//
// export interface MemoizedSelector<State, Result> extends Selector<State, Result> {
//
//     /**
//      * release
//      */
//     release(): void;
//
//     /**
//      * projector
//      */
//     projector: AnyFn;
// }
//
//
// function test(input: string) {
//     return input + ' ';
// }
// test.release = function() {
//
// }
//
// test.projector = function() {
//
// }
//
//
//
// const ms: MemoizedSelector<string, string> = test;