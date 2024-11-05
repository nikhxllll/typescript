function Users(name:string,age:number,cb:(arg:string)=> void):void{
    // console.log("USER")
    cb("NIKHIL")
}


Users("Nikhil",20,(arg:string)=>{
    console.log(arg)
})
console.log(Users)