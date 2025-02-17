const  obj={
    name: "SRK",
    dialog:function(){
        console.log(this);

        function inner()
        {
            console.log(this);
        }
        return inner.bind(this);
    }
}
const res=obj.dialog();
console.log(res)
res()