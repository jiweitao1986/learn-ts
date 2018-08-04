"use strict";
var Person = (function () {
    function Person(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Person.prototype.intro = function () {
        console.log('I am ' + this.fullName + '.');
    };
    return Person;
}());
var zhangSan = new Person('San', '-', 'Zhang');
console.log(zhangSan.firstName + zhangSan.lastName);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Person;
