const obj1={
        name :"Salman khan",
}
const obj2={
        name :"Sahrukh khan",
}
const obj3={
        name :"Amir khan",
}
function meme(){
        console.log(this);
        console.log(`Hello i'm ${this.name}`);
}
meme.call(obj1)
meme.call(obj2)
meme.call(obj3)

const obj={
        name:function(){
        function inner()
        {
                console.log(this)
        }
      inner.call(this)  
}        
}
obj.greet()
