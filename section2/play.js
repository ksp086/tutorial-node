const person = {
    name: 'Kashyap',
    age: 21,
    greet() {
        console.log('Hi, i am ' + this.name);
    }
};
person.greet();