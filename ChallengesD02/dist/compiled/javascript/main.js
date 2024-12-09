"use strict";
// type Colors = {
//   R: number,
//   G: number,
//   B: number
// };
// Do Not Edit Here
let myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Do Not Edit Here
let myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    if (typeof val === "string") {
        return "Error";
    }
    else if (val > 10) {
        return "True";
    }
    else {
        return "False";
    }
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (typeof age === "string") {
        return "Error";
    }
    else if (age > 40) {
        return "Yes";
    }
    else {
        return "No";
    }
}
// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
// ========= Challenge 6 ===========
let post;
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
let id = post[0];
let title = post[1];
let state = post[2];
let obj = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
console.log(obj[0]); // 100
console.log(obj[1]); // "Title"
console.log(obj[2]); // true
// ========= Challenge 7 ===========
// Create Enums + Function Here
function CalcInsane(num) {
    return num - Game.Hard;
}
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = CalcInsane(50)] = "Insane";
})(Game || (Game = {}));
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
// ========= Challenge 8 ===========
const user = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
};
// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
//# sourceMappingURL=main.js.map