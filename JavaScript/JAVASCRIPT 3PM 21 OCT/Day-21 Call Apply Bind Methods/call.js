const obj={
    name: "Tinku",
    age:24
}
function details(city,pin)
{
    console.log("username:",this.name)
    console.log("City;",city)
    console.log("pincode: ",pin)
}
//details.call(obj,"Noida",20301);
details.apply(obj,["Noida",201301])