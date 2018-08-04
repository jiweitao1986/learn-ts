import {Gender} from './Gender';



console.log(Gender.Male === 'Male');
const map = new Map<Gender, string>();
map.set(Gender.Male, 'aaa');
console.log(map.get(Gender.Male));


// console.log(Gender[Gender.Male]);
// console.log(Gender.Male);

// console.log(Gender[Gender.Female]);
// console.log(Gender.Female);