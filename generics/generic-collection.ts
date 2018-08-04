class Collection<T> {
  createItem(): T {
    return new T();
  }
}

class Person {
  name: string;
  constructor() {
    this.name = 'ZhangSan';
  }

  say(){
    console.log('hello');
  }
}

// const collection = new Collection<Person>();
// console.log(collection.createItem());
// console.log('aaa');

// console.log(Person.toString());
console.log(Object.keys( new Person()));
