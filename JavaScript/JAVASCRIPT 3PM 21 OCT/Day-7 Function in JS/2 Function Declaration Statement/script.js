

function greet(fname,age)
{
    if(typeof(fname)==="string" 
        && fname !=="" && 
        fname.length<=16)
    {
        console.log(`User: ${fname} logged in`)
    }
    else{
        console.error("Invalid Username")
    }

    if(typeof(age) === "number" && age !=="" && (age>17 && age<60))
    {
        console.log(`Age :${age}`)
    }
    else{
        console.error('Invalid Age');
    }
}

const userName=prompt("Enter your fullname");
const age=+prompt("Enter your age");

greet(userName,age)