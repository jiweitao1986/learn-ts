/**
 * Created by jiwt on 2017/10/12.
 */
class Person {

    name: string;

    constructor(name: string) {
        this.name = name;
        Object.defineProperty(this, 'hello', {
            value: function() {
                console.log(this.name);
            }
        });
    }


    say() {
        console.log(`My name is ${this.name}`);
    }


}

var p = new Person('ZhangSan');
p.hello();