const person = {
    name: 'Kashyap',
    age: 21,
    greet () {
        console.log('Hi, i am ' + this.name);
    }
};
person.greet();

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies);
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));