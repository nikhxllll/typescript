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
var a;
a = 12;
a = "NIKHIL"; //NO Errors found
//Unknown datatype
var b;
b = 12;
b = "Nikhil"; // the difference between any and unknownn is you can use any DT anywhere and for unknown you have to check first using if statement
//for example
if (typeof b === "string")
    console.log(b.length); //like this
