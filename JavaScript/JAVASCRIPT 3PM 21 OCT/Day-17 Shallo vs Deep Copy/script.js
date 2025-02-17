/***
 *  ! shallow copy 
 

const jack={
        cake:"Rasmalai cake"
}
const oggy=jack;
delete oggy.cake;
console.log(oggy)
console.log(jack)
*/

/***
 *  ! Deep copy  in onbject 

const jack={
        cake:"Rasmalai"
}

// step-1 create an empty object
const oggy={}
//step-2 use for-in-loop

for(element in jack)
{
        //step-3 initialize key value pair inside oggy ibject
        oggy[element]=jack[element]
}

jack["tool"]="Knife";
console.log(jack)
console.log(oggy)
 */

const old_skills=["html","css"];

// step-1 create an empty object

//step-2 use for-in-loop

for(element of old_skills)
{
        new_skills.push(element)

}
new_skills.push("js")
console.log()





