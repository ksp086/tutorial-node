const name = 'Kashyap';
let age = 21;
const hasHobbies = true;

age = 20;

function summarizeUser(userName, userAge, userHobby) {
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