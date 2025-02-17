/*console.log("Start")

function movie(n)
{
    console.log(`Person: ${n}`)

    if(n ===1)
    {
        return true;
    }

    return movie(n-1)
}

console.log("Response: ",movie(5))
*/

// 1.Write a function that prints the sum of first 100 natural number?

function findsum(start,end)
{
    let sum=0;
    for(let i=start;i<=end;i++)
    {
        sum=sum+i;
    }
    return sum;
}

console.log("Sum is ",findsum(1,100))

/* 
  ! Recursion Method


function sum(n)
{
    if(n=== 1)
    {
        return 1;
    }
    return n+ sum(n-1);
}

console.log("Sum is: ",sum(3))


// Write a function that calculate power ?

function findPower(base,exponent)
{
    return base**exponent;
}

function findPower(base,exponent)
{
    return Math.pow(base,exponent);
}

function findPower(base,exp)
{
    let pow=0;
    for(let i=1;i<=exp;i++)
    {

    }
}
    */
// Method-4

function power(b,e)
{
    if(e === 1)
    {
        return b
    }


    return b * power(b,e-1)
}

console.log(power(10,3))

