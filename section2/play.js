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
// console.log(hobbies);
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

const copiedArray = [hobbies];
console.log(copiedArray);
const copiedArray2 = [...hobbies]; // spread of ...array_name
console.log(copiedArray2);
const copiedPerson = {...person};
console.log(copiedPerson);