// const obj1 = new Object({name:"Tinku",age:24})
// console.log(obj1)
/**
const arr=[
    function (){console.log("First Function")},
    function (){console.log("Second Function")},
(a,b)=>a+b
]
console.log(arr[0]())
console.log(arr[1]())
console.log(arr[2]())
*/

//!Question-1 write a function that takes an array and calculate factorial of each element?

// function findFactorial(n)
// {
//     let fact=1;
//     for(let i=n;i>0;i--)
//     {
//        fact=fact*i;
//     }
//     return fact;
// }

// function arrayFactorial(arr)
// {
//     let result=arr.map(element=>{
//         let x=findFactorial(element);
//         return x;
//     })
// }

// const input=[1,2,3,4,5]
// let output=arrayFactorial(input)
// console.log(output)

function calculateFactorials(arr) {
    // Helper function to calculate factorial
    function factorial(num) {
      if (num < 0) return undefined; // Factorial is not defined for negative numbers
      if (num === 0 || num === 1) return 1; // Base cases
      return num * factorial(num - 1); // Recursive case
    }
  
    // Map through the array and calculate factorial for each element
    return arr.map(factorial);
  }
  
  // Example usage
  const numbers = [0, 1, 2, 3, 4, 5];
  const factorials = calculateFactorials(numbers);
  console.log(factorials); // Output: [1, 1, 2, 6, 24, 120]
  