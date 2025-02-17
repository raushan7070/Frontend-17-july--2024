Case-1 
        function memes()
        {
            console.log("Samajh Rahe ho..!!");
            return `Jaldi vaha se hato` 
        }

        let x=memes();
        console.log("Returned value is:",x);



/**case-2 
function memes1(fullname)
{
        console.log(`${fullname}, Bulati h magar jane ka nahi..`)
}

console.log(memes1("Himanshu"))*/


/**case-3 default parameter 
function memes2(fullname="user")
{
    console.log(`${fullname} Me bhi totla mela baap bhi totla mela pula khandan totla..!`)
}

// memes2()
memes2("Chirag")*/


/**Case-4 Arguments 
function dialog()
{
    console.log(arguments)

    console.log(`Mere ${arguments[0]+" "+arguments[1]} ayenge..!!`)
}

dialog("Karan", "Arjun")*/

/** variable declared with function keyword supports hoisting */


// let x=dialog("Tinku")
// console.log(x)

// function dialog(name)
// {
//     console.log(`${name} samajh aya..!`)
// }
