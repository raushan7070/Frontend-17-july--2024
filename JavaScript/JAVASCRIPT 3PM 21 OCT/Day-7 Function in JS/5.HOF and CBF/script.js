// function calculator(a,task,c)
// {
//     console.log("Calculato starts");
//     let x=task(a,c)
//     console.log("Result:",x)
//     console.log("Calculator ")
// }

// Functional Programming

function generic()
{
    console.log(arguments)              

    arguments.callee()
}

generic(function(){console.log("Hii")})

function generateCode()
{
    return (
        function()
        {
            console.log("Code is generated")
        }
    )
}