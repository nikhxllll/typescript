"use strict";
function Users(name, age, cb) {
    // console.log("USER")
    cb("NIKHIL");
}
Users("Nikhil", 20, (arg) => {
    console.log(arg);
});
