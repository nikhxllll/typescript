

interface User {
    name : string,
    email : string,
    password : string
}


interface Admin extends User {
    admin : boolean
}


function abcd(obj : Admin){
    console.log(obj.admin)
}

abcd({name : "Nikhil",email : "23@gmail.com",password : "123",admin:true})