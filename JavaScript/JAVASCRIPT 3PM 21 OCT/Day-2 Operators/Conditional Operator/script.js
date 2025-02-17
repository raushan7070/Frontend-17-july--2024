// // const user=prompt("Enter your name")
// // console.log(user)



// // const res=(user && user!==" ")?Welcome`${user}` :`Invalid User name `;
// // console.log(res)

// const  a=+prompt("Enter first number");
// const  b=+prompt("Enter second number");
// const user3=+prompt("Enter third number");


// const res=(a>b?a:b)>c?(a>b?a:b)>c;
// console.log(`biggest number among a,b,c is: %{res}`);

// const year=+prompt("Enter a year")

// const res=(year%100 !==0 && year%4 ==0) || (year%400==0)?`Leap year ${year} Not a leap year;

/*const a=+prompt("a ")
const b=+prompt("b ")
const c=+prompt("c")

const res=(a>b?a:b)
console.log(res)


//leap year */

const year=+prompt("Enter a year");
const res=(year%100 !==0 && year%4==0) || (year%100==0)?` is Leap Year ${year}` : `${year} is Not a leap year`;
console.log(res)


