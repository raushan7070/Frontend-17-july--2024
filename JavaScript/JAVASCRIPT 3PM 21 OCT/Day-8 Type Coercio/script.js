/** Implicit Type Coercion 

const a=10;
const b=true;

console.log(a - b);

/** Explicit Type Coercion 

const a=1;
const b=false;

console.log(a - +b)


user input */
const fname=prompt("Enter your fullname");
// const age=+prompt("Enter your age");   ES6 solution

// const age=Number(prompt("Enter your age"));  ES5

console.log(fname,typeof(fname));
console.log(age,typeof(age));

/**
const userName=prompt("Enter your name")

    if( typeof(userName)=== "string" && userName!=="" && userName.length<16 )
    {
        console.log(`User Name is: ${userName}`)
    }
    else
    {
       console.error("Invalid Username")
    }
 */

    /**const a=Symbol(9);
    console.log(a)
    const x=typeof(a.description);
    console.log(x)*/