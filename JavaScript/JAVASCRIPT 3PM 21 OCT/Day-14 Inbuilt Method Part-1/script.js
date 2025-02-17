/*const arr=["a","b","e","f","d"];

let z= arr.splice(2,2,"c")

console.log(arr)*/


// slice 
/*
const movies=[
    "RAce-3",
    "PHP",
    "Dhamal",
    "Welcome",
    "BodyGuard",
    "pk",
    "morce"

]

const comedyMovies=movies.slice(1,3)

comedyMovies.push(movies.slice(4,6))

console.log(comedyMovies.flat(1))*/

const movies=[
    "RAce-3",
    "PHP",
    "Dhamal",
    "Welcome",
    "BodyGuard",
    "pk",
    "marco"

]

 //let indexNumber=movies.indexOf("Welcome",0)
 //console.log(indexNumber)

// let indNo=movies.lastIndexOf("PHP")
  console.log(indNo)

let res=movies.includes("PHP",0)
if(res){
console.log("Movies is Available")
}
