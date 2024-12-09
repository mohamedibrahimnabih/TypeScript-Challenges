// type Colors = {
//   R: number,
//   G: number,
//   B: number
// };

// type Alpha = Colors & {
//   A: number
// }

// let myName : Colors = { R: 100, G: 200, B: 255 };
// function printResult(value: Alpha) {
//   console.log(value.R);
//   console.log(value.G);
//   console.log(value.B);
// }

// let value : Alpha = {R: 100, G: 200, B: 250, A: 1}
// printResult(value)

// ========= Challenge 1 ===========
// Write Your Code Here
type n = number;

// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here

// ========= Challenge 2 ===========
// Write Your Code Here
type mix = number | boolean;

// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

// ========= Challenge 3 ===========
// Write Your Code Here
// Do Not Edit Here
type Info = {
  theName: string, 
  theAge: number
}

type Full = Info & {
  country: string
}

function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

// ========= Challenge 4 ===========
type Returned = "True" | "False" | "Error";

function yesOrNo(val: number | string) : Returned {
  
  if (typeof val === "string") {
    return "Error";
  }
  else if(val > 10) {
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

// ========= Challenge 5 ===========
type custom = "Error" | "Yes" | "No";

function isHeOld(age: number | string) : custom {
  if (typeof age === "string") {
    return "Error";
  }
  else if(age > 40) {
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
let post : readonly [number, string, boolean];
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
let id = post[0]
let title = post[1]
let state = post[2]

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
function CalcInsane(num: number) {
  return num - Game.Hard;
}

enum Game {
  Easy = 100,
  Medium = Easy - 20, 
  Hard = Medium - (Easy / 2),
  Insane = CalcInsane(50)
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20

// ========= Challenge 8 ===========
const user: {
  username: string,
  age: string | number,
  website?: string,
  skills: {
    frontEnd: string[],
    backEnd: (string | number)[]
  }
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"]
  }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);