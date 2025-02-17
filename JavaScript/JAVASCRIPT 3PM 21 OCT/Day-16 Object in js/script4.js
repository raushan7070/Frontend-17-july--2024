const obj={
    name :"Tinku",
    age:24,
    country:"UK",
    city:"Noida",
    deleteKey:"parnika"

}

//Insertion
obj.city="Delhi";
obj.skills=["html","js"]

obj.deleteKey=null

//updation
obj.country=obj.country+"India"

//deletion
delete obj.deleteKey

//check any key is already present or not
let response="city" in obj;

console.log(obj)
console.log(response)


const nested={
    name:"Tinku",
    age:24,
    address:{
        city:"Noida",
    
        countryInfo:{
            countryName:"India"
        }
    }
}

console.log(nested.name)
console.log(nested.address.city)
console.log(nested.address.countryInfo.countryName)