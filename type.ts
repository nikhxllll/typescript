type value = number | null

let v : value = 28; //No error as number is allowed  
console.log(v)

// let q : value = true  //ERROR AS BOOLEAN IS NOT DEFINED


// ONE MORE EXAMPLE

type arg = string | boolean | null;

function User(obj : arg){
    console.log(obj)
}

User("Nikhil")
// User(12) // Error