/*
What are closures ?

A closure is the combination of a function and the lexical environment within which that 
function was declared.

In simpler terms, a closure allows a function to remember and access its lexical scope 
even when that function is executing outside its original scope.

*/

function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from the outer function's scope
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // This will print: "I am from the outer function"

// another example
function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}

// In closures, the referece to the variable is stored, not the value that's why when executed
// gives value as 100 instead of 10;
let res = x();
res();


// famous example
function print(){
  for(var i=1; i<6; i++){
    setTimeout(() => {
      console.log(i)
    }, i*1000);
  }
  console.log('print me 1st');
}
print();
/* Above function prints 6, 5 times after given time interval. Because closure is formed with the
scope of var i and var has functional scope. So at every iteration of loop same reference of i is
set in the closure that's why when at last function starts printing i, it has 6 as its value and 
that is printed 5 times.

In this case, the callback function inside setTimeout forms a closure over the i variable in the 
scope of the print function.
*/  

function print2(){
  for(let i=1; i<6; i++){
    setTimeout(() => {
      console.log(i)
    }, i*1000);
  }
  console.log('print me 1st');
}
print2();
/* In above case as let has block scope so every time new copy is send to the timeout and it prints
1 2 3 4 5 at given interval.
*/

function print3(){
  for(var i=1; i<6; i++){
    function newScope(val){
      setTimeout(() => {
        console.log(val)
      }, val*1000);
    }

    newScope(i);
  }
  console.log('print me 1st');
}
print3();
/* In above case as var i is sent to new function newScope() and as var has functional scope 
so every time new copy is send to the timeout and it prints
1 2 3 4 5 at given interval.
*/
