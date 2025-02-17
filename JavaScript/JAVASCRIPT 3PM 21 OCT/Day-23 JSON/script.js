const obj1={
    carname:"thar",
    price:"20lac",
    color:"Black"
}
//! convert js object into json

constobj2=JSON.stringify(obj1)

localStorage.setItem("data",obj2)