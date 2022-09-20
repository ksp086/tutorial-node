const name = 'Kashyap';
let age = 21;
const hasHobbies = true;

age = 20;

const summarizeUser = (userName, userAge, userHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHobby
    );
}
console.log(summarizeUser(name, age, hasHobbies));

const add1 = (a, b) => {
    return a + b;
};
console.log(add1(4, 4));

const add2 = (a, b) => a + b;
console.log(add2(3, 4));

const addOne = a => a + 1;
console.log(addOne(38));

const addRandom = () => 1 + 2;
console.log(addRandom());