 var Music = /** @class */ (function () {
    function Music(music_name, artist_name, thumbnail, isAvailable) {
        this.music_name = music_name;
        this.artist_name = artist_name;
        this.thumbnail = thumbnail;
        this.isAvailable = isAvailable;
    }
    return Music;
}());
var m1 = new Music("TT", "seedhe maut", "TT.png", true);
console.log(m1);
//Another way 
var Bottle = /** @class */ (function () {
    function Bottle(brand, price, color, material) {
        this.brand = brand;
        this.color = color;
        this.material = material;
        this.price = price;
    }
    return Bottle;
}());
var b1 = new Bottle("Milten", 1200, "Black", "Copper");
console.log(b1);
