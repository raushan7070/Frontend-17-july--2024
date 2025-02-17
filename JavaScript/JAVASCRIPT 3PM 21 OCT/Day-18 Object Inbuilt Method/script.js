const obj={
        name :"Tinku",
        age:34,
        city:"Noida"
}
const x=Object.keys(obj)
console.log(x)

const y=Object.values(obj)
console.log(y)

const user={
        userName:"Chombu",
        isWorking:false
}
let task=Object.entries(obj)
console.log(obj)

// for(element of Object.keys(user))
// {
//         console.log(element)
// }
// let task=Object.values(user)

// for(element of task)
// {
//         console.log()
// }

/***
 * !Object.fromEntries


let z=Object.fromEntries(task)
console.log(z) */

/***
 * !Object.assign(target,src1,src2,.....srcn)


const a={
        userName:"Tinku"
}
const b={
        age:21
}
const c={
        isWorking:false
}

function findProfile(){
        return Object.assign({},a,b,c)
}
let response=findProfile()
console.log(response)
// let res=Object.assign({},a,b,c)
// console.log(res)
 */


