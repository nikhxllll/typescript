interface User  {
    name :string;
    email:string;
    password:string
    gender?:string //optional some are preffered to say gender and some are not so use "?" for optinal
}




function getUser(obj : User){
    console.log(obj.name)
}


getUser({name : "Nikhl",email : "123@gmail.com",password : "123#" ,gender:"Male"})
getUser({name : "Rakesh",email : "122333@gmail.com",password : "122333#"})