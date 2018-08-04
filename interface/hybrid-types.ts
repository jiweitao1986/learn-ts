interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        return 'start = ' + start;
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log('reset works');
    };
    return counter;
}

let c = getCounter();
console.log(c(10));

c.reset();

c.interval = 5.0;
console.log(c.interval);