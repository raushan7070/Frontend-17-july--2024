console.log("start");
let a = 10;
var b = 20;
const c = 30;
{
  let a = 100;
  var b = 200;
  const c = 300;
  console.log(a);  //100
  console.log(b); //200
  console.log(c);  //300
}
console.log(a); //10
console.log(b);//200
console.log(c);//30
console.log("end");