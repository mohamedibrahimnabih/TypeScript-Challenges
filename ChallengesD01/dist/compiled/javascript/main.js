"use strict";
// console.log("Hello world!");
// ========= Challenge 1 ===========
// Destination folder
// ========= Challenge 2 ===========
function calculate(value1, value2) {
    return value1 + value2;
}
console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
// ========= Challenge 3 ===========
function printInfo(value1, value2) {
    return `Value One Is ${value1}, Value Two Is ${value2}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
// ========= Challenge 4 ===========
let arr;
arr = [10];
arr = [[true, false, true, false, false]];
arr = [["Ahmed", "Ali", "Mona"]];
arr = [[["Ahmed", "Ali", "Mona"]]];
arr = [[[1, 2, 3, 4, 5]]];
// ========= Challenge 5 ===========
// function reportErrors(username, age: number) {
//   let rank = "Professor";
//   return `Username: ${username}`;
//   console.log("We Will Not Reach Here");
// }
// console.log(reportErrors("Elzero", 40));
// ========= Challenge 6 ===========
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero
// ========= Challenge 7 ===========
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
// ========= Challenge 8 ===========
// Write The Function Here
function printInConsole(...args) {
    for (let index = 0; index < args.length; index++) {
        console.log(`The Value Is ${args[index]} And Type Is number`);
    }
    return "Done";
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
//# sourceMappingURL=main.js.map