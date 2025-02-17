// console.log("start");
// let a = 10;
//     {
//         let b = 200;
//             {
//                 const c=30;
//                 var d=40;
//                 console.log(a)
//                 console.log(b)
//                 console.log(c);
//                 console.log(d);
//             }
//         console.log(b)
//     }
// console.log(a);
// console.log(d);
// console.log("end");


console.log("Start")
var a=1;
let b=2;
const c=3;

function greet()
{
    console.log("Inside a Function")
    var a=10;
    let b=20;
    const c=30;
          d=40;
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}

greet()
console.log("Outside a Function")
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log("End")