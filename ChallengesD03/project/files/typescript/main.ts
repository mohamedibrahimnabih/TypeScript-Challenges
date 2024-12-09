// class User {
//   u: string;
//   s: number;
//   msg: () => string;
//   constructor(username: string, salary: number) {
//     this.u = username;
//     this.s = salary;
//     this.msg = () => {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }

// let userOne = new User("Elzero", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

// ========= Challenge 1 ===========
// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  state: boolean;
  getName(): string;
}

// Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}

user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
console.log(user.getName())

// ========= Challenge 2 ===========
// Create Interface Here
interface Client {
  id: number;
  username: string;
  active: boolean;
  discount: number;
  getPrice(price: number) : number;
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// ========= Challenge 3 ===========
interface Superman extends Man, Bird {
  bodyType: string;
  origin: string;
}

// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}

let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}

// ========= Challenge 4 ===========
// Create Class Here
class Player {
  // fName: string;
  // lName: string;
  // level: number | string;
  // state?: boolean;

  constructor(private fName: string, private lName: string, private level: number | string, private state?: boolean) {
    // this.fName = fName;
    // this.lName = lName;
    // this.level = level;
    // this.state = state;
  }

  details() : string {
    return `${this.state ? 'VIP ' : ''}${this.fName} ${this.lName}, Type Is Mage Level Is ${this.level}`;
  }
}

// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// ========= Challenge 5 ===========
class Shorten {
  // public id: number;
  // public username: string;
  // protected title: string;
  constructor (public id: number, public username: string, public title: string) {
    // this.id = id;
    // this.username = username;
    // this.title = title;
  }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

// ========= Challenge 6 ===========
class Show {
  constructor (private _title: string) {}

  get title() : string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}

let tester2 = new Show("Elzero");

console.log(tester2.title); // Property 'title' does not exist on type 'Show'
tester2.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester2.title); // Property 'title' does not exist on type 'Show'

// ========= Challenge 7 ===========
interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Player2 implements Play {
  constructor(public id: number, public title: string, public level: string | number) {}

  logIn(): void {
    console.log("Logged In");
  }
  logOut(msg: string): void {
    console.log(`Logged Out, ${msg}`);
  }

}

let newPlayer1 = new Player2(100, "Elzero", 95);

console.log(newPlayer1.id); // 100
console.log(newPlayer1.title); // "Elzero"
console.log(newPlayer1.level); // 95
newPlayer1.logIn(); // Logged In
newPlayer1.logOut("Good Bye"); // Logged Out, Good Bye