
/**
 
/**! point no-4 in keys 
const Key1=prompt("Enter First key" )
const Key2=prompt("Enter Second key")
const key3=prompt("Enter Third Key")
const obj={
    [Key1]: "Tinku",
    [Key2]: 23,
    [key3]: "Noida"

}
console.log(obj)*/

/**! point no-5 in keys 

const username=prompt("Enter your full name");
const age=+prompt("Enter your age");
const isWorking=prompt("are you working anywhere");

const userDetails={
    username,
    age,
    isWorking
}
console.log(userDetails)*/

//! ques-1 Write a function that takes an array and calculate factorial of each element ?




function findFactorial(n)
{
    let fact=1;
    for(let i=n; i>0; i--){
        fact=fact*i;
    }
    return fact;
}



function arrayFactorial(arr)
{
    let result=arr.map(element=>{
        let x=findFactorial(n)
        return x;

    })
return result;
}
const input =[1,2,3,4,5]
console.log(input)
let output=arrayFactorial(arr)
console.log(output)








