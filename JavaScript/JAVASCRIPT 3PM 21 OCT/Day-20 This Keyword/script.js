let obj={
        name:"SRK",
        greet:function()
        {
                console.log(this)
                function inner()
                {
                        console.log(this)
                }
                inner()
        }
}
obj.greet()


const onje={
        name :"Amir khan",
        details:function(){
                console.log(this)
        }
}
obj.details()
console.log(ibj.details)

let outer=obj.details
outer()

// this keyword inside an arrow function
const fun=()=>{
        console.log(this)
    }
    
    
    
    const obj1={
        name:"Salman Khan",
    
        greet:function(){
            // console.log(this)  ------> obj
    
            function inner1(){
                    console.log("named function",this)
            }
            const inner2=()=>{
                console.log("arrow function",this)
            }
            inner1()
            inner2()
        }
    }
    
    obj.greet()