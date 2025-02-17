/*
//1.push() method

const arr=[1,2,3]
arr.push(40,50)
console.log(arr)

//2. pop() method

const arr1=[1,2,3,100]
arr.pop()
console.log(arr1)

// 3.unshift()

const yt=["carry","BB ki wines"]
yt.unshift("Purab jha")

console.log(yt)

// 4.shift()
const yt1=["Virat kohli","carry","BB ki wines"];
yt1.shift()
console.log(yt1)

//5.reverse

const arr3=[1,2,3,4,5]
arr3.reverse()
console.log(arr3)

//6. indexOf

const users=["tinku","john","chombu","joy","simba"]
let x= users.indexOf("john",1)
console.log(x) 

// 7.includes()

 const users1=["tinku","john","chombu","joy","simba"]
 let y=users.includes("john")
 console.log(y)

//8.splice() method
//1. Delete three elements from index 1.

let arr2 = [10,20,30,40,50];
arr2.splice(1,3)
console.log(arr2);

//2.update value at index 3to 500

let arr4=[10,20,30,40,50]
arr4.splice(3,1,500)
console.log(arr4)

//3.Insert 100,200 and 300 from index2.
let arr5=[10,20,30,40,50];
arr5.splice(2,0,100,200,300);
console.log(arr5);

//9.slice() Copy array from index 0 to 2.

let arr6=[10,20,30,40,50];
let copy_elements= arr6.slice(0,3);
console.log(copy_elements);

//9.slice() Copy array from index 0 to 2.

//10.Sort() It will modify the original Array.

let arr7=[4,2,5,3,1]

arr7.sort((a,b)=> a-b)

// Map(callback)

let arr8=[1,2,3,4,5];

arr=arr8.map(Element => Element**2)

console.log(arr);

const newArr=arr.map((Element,index)=>{

    if(index < arr.length/2)
    {
        return Element**2;
    }
}
)
console.log(newArr)

// Filter ()

let arr=[1,2,3,4,5];

let mid=Math.floor(arr.length/2)

let x= arr.filter((Element,index,array)=>index<mid)

let y= arr.filter((Element,index,array)=>Element !==3)

console.log(x)
console.log(y)

let arr2=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

arr2.map(row=>{
    return (row.filter(Element%2==0))
}
)
console.log(arr2.map)*/

function generateOTP(length){
    let otp ="";
    for(let i=0; i<length; i++){
        otp+=Math.floor(Math.random()*10).toString();
    }
    return otp;
}
console.log(generateOTP(4));

// flat()






