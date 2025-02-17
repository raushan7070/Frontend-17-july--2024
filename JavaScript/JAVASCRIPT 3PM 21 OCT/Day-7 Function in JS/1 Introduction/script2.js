/* case 2 Function is declared inside another function */

var user="tinku";

function outer(age,city)
{
   console.log("Inside outer Function");
   var pin=110007;
   console.log(`username:${user}`)
   
   function inner(m,n)
   {
         console.log("Inside inner function")
         console.log(m)
         console.log(n)
   }
   inner()
}
outer()