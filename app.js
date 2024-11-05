"use strict";
function abcd() {
    return "hello";
}
abcd();
//enum datatype
var Name_Surname;
(function (Name_Surname) {
    Name_Surname["Nikhil"] = "Yadav";
    Name_Surname["Rakesh"] = "Tiwari";
})(Name_Surname || (Name_Surname = {}));
console.log(Name_Surname.Rakesh);
//Any dataype
let a;
a = 12;
a = "NIKHIL"; //NO Errors found
//Unknown datatype
let b;
b = 12;
b = "Nikhil"; // the difference between any and unknownn is you can use any DT anywhere and for unknown you have to check first using if statement
//for example
if (typeof b === "string")
    console.log(b.length); //like this
//inference and annotation
let number = 12; //here by hovering you can see its DT is number and you not defined that its inference of TS
let str = "Nikhil"; //This is annonation
