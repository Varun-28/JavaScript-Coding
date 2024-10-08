/*
Implement a function called, areThereDuplicates which accepts a 
variable number of arguments, and checks whether there are any duplicates 
among the arguments passed in.  You can solve this using the frequency 
counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

// Using Frequency Counter
function areThereDuplicates1() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}
//Note: arguments is a keyword that gives us an object of all the parameters
//passed to the function, where keys are index and values are parameters passed.
//That's why we use 'in' operator with arguments. 

// Using Multiple Pointers
function areThereDuplicates2(...args) {
    args.sort((a, b) => a-b);
   
    let start = 0;
    let next = 1;
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true;
      }
      start++;
      next++;
    }
    return false;
}

// One Liner Solution
function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates1(2,1,2));
console.log(areThereDuplicates1(1,2,8));
console.log(areThereDuplicates1(3,2));

console.log(areThereDuplicates2(2,1,2));
console.log(areThereDuplicates2(1,2,8));
console.log(areThereDuplicates2(3,2));

console.log(areThereDuplicates3(2,1,2));
console.log(areThereDuplicates3(1,2,8));
console.log(areThereDuplicates3(3,2));