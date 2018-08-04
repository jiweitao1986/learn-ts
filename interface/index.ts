/**
 * indexable types
 */


/**
 * ArrayString
 */
interface StringArray {
    [index: number]: string;
}


let myArray: StringArray;
myArray = ["Bob", "Fred"];


/**
 * StringDictionary
 */
interface StringDictionary {
    [key: string]: string;
}

const dic2: StringDictionary = {
    id: 'id',
    name: 'ZhangSan'
}

