const myName = {
    firstname: 'Varun',
    lastname: 'Verma'
}

// const printFullName = function(city, state){
//     console.log(this.firstname + " " + this.lastname + " from " + city + ", " + state);
// }
// Both above and below functions will work in this case but not arrow functions

function printFullName(city, state){
    console.log(this.firstname + " " + this.lastname + " from " + city + ", " + state);
}

// function borrowing
printFullName.call(myName,'Gorakhpur','UP');
printFullName.apply(myName,['Gorakhpur','UP']);

// bind method
const myFullName = printFullName.bind(myName,'Gorakhpur','UP');
console.log(myFullName)
console.log(myFullName())