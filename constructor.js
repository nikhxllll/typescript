"use strict";
class Music {
    constructor(music_name, artist_name, thumbnail, isAvailable) {
        this.music_name = music_name;
        this.artist_name = artist_name;
        this.thumbnail = thumbnail;
        this.isAvailable = isAvailable;
    }
}
let m1 = new Music("TT", "seedhe maut", "TT.png", true);
console.log(m1);
//Another way 
class Bottle {
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.color = color;
        this.material = material;
        this.price = price;
    }
}
let b1 = new Bottle("Milten", 1200, "Black", "Copper");
console.log(b1);
