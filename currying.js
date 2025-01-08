// Non-curried function
const add = (a, b) => a + b;

// Curried function
const curriedAdd = a => b => a + b; // a, b are parameters

// Partial application
const add5 = curriedAdd(5); // Create a new function that adds 5 to its argument

console.log(add5(3)); // Output: 8 (5 + 3 = 8)

const add5and2 = curriedAdd(5)(2); // 5, 2 are arguments

console.log(add5and2); // Output: 7 (5 + 2 = 7)

/*
Currying is the process of transforming a function that takes multiple arguments 
into a sequence of functions, each taking a single argument. Currying allows you to 
partially apply arguments to a function, creating a new function with those arguments fixed, 
which can then be invoked later with the remaining arguments.

Parameters are the placeholder for data that a function will use, while arguments are the actual 
values that are passed to the function.
*/
