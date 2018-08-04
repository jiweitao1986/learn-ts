
/**
 * @whatItDoes Represents a type that a Component or other object is instances of.
 *
 * @description
 *
 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
 * the `MyCustomComponent` constructor function.
 *
 * @stable
 */
const Type = Function;

/**
 * 是否是一种类型
 * @param v
 * @returns {v is Type<any>}
 */
function isType(v: any): v is Type<any> {
    return typeof v === 'function';
}

interface Type<T> extends Function { new (...args: any[]): T; }

// 导出
export { Type, isType };
