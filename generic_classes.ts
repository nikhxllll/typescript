class BottleMaker<T>{
    constructor(public name:string,key : T){}
}

let b2 = new BottleMaker("MIlton","")
console.log(b2)