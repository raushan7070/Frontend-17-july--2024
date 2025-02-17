//  #  flat()
// let arr =[[1,2,3],
//           [4,5,6],
//           [7,8,9]
//         ]
      
// let x= arr.flat(1)
// console.log(x)

// let arr =[[1,2,3],
//           [4,5,6],
//           [7,8,9]
//         ]


// let arr1D=arr.map(row=>
// {
//   let x=row.map(Element => Element*2)

//   return x;
// }
// ).flat(1)
// console.log(arr1D)

// let arr1D=arr.map(row=>
//   {
//     let x=row.filter(Element => Element%2==0)
  
//     return x;
//   }
//   ).flat(1)
//   console.log(arr1D)

// # flatMap()

// let arr=[1,2,3,4,5];

// let x=arr.flatMap(element=>
//   {
//     return arr.flatMap(element => [element,element**2]);
    

// })
// console.log(x)


// every()
// const arr1=[10,20,30,40,50]

// let res=arr1.every(element => element< 60)

// console.log(res)

// some()

const arr1=[10,20,30,40,50]

let res=arr1.some(element => element > 60)

console.log(res)

// find(callback)

let users=[
        {name:"Harsh",age:21},
        {name:"Aman",age:22},
        {name:"Saurabh",age:24},
        {name:"Aman",age:23},
]

let x=users.find(element => element.name == "Aman");

let a=users.findLast(element => element.name == "Aman");


let y=users.findIndex(element => element.name == "Aman");


let b=users.findLastIndex(element => element.name == "Aman");

console.log(x,y)
console.log(a,b)

/**
 method
 with()
 of()
 join()
 concat()
 */

 let arr2= [1,2,3,4,5,6];

 let newArr=arr.with(2,300);

 

 








