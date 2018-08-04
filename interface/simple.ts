
// --------------------------------------------------------------------------------
// Simple Interface
// --------------------------------------------------------------------------------

console.log('\n\r\n\r');
console.log('----------------------------------------');
console.log('Simple Interface');
console.log('----------------------------------------');

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);






// --------------------------------------------------------------------------------
// Optional Properties
// --------------------------------------------------------------------------------

console.log('\n\r\n\r');
console.log('----------------------------------------');
console.log('Optional Properties');
console.log('----------------------------------------');

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};

    if (config.color) {
        newSquare.color = config.color;
    }

    // 属性不存在时，值为undefined
    console.log(config.width);

    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare);



// --------------------------------------------------------------------------------
// Readonly Properties
// --------------------------------------------------------------------------------

console.log('\n\r\n\r');
console.log('----------------------------------------');
console.log('Optional Properties');
console.log('----------------------------------------');


interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// try {
//     p1.x = 5;
//     console.log(p.x);
// } catch(e: Error) {
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);
// }




class Vertex implements Point {
    readonly x: number;
    readonly y: number;

    constructor() {
        this.x = 10;
        this.y = 20;
    }
}

const v = new Vertex();
try {
    v.x = 5;
    console.log(v.x);
} catch(e: Error) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
}


// --------------------------------------------------------------------------------
// Excess Property Checks
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// Function Types
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// Indexable Types
// --------------------------------------------------------------------------------






// --------------------------------------------------------------------------------
// Extending Interfaces
// --------------------------------------------------------------------------------




// --------------------------------------------------------------------------------
// Hybrid Types
// --------------------------------------------------------------------------------





// --------------------------------------------------------------------------------
// Interfaces Extending Classes
// --------------------------------------------------------------------------------

