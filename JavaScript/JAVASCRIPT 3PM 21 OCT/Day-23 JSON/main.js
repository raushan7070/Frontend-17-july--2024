const response=localStorage.getItem("data");

//convert json object into js object

const obj=JSON.parse(response)
console.log(response);
console.log(obj,typeof obj)