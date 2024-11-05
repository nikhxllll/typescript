


class Music{
    constructor(public music_name:string,public artist_name:string, public thumbnail:string, public isAvailable:boolean){

    }
}

let m1 = new Music("TT","seedhe maut","TT.png",true)

console.log(m1
)

//Another way 
class Bottle{
    public brand;
    public price;
    public color;
    public material
    constructor(brand:string,price:number,color:string,material:string){
        this.brand = brand
        this.color = color
        this.material = material
        this.price = price
    }
}

let b1 = new Bottle("Milten",1200,"Black","Copper")
console.log(b1)