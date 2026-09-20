// primitives

let username: string = " rudra";
let age: number = 22;
let isAdmin: boolean = true;

// arrays

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];

// tuples

let person: [string, number] = ["rudra", 22];

//enum

enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Green;

//any (not safe, should be avoided)

let randomValue: any = 10;
randomValue = "rudra";
randomValue = true;

//Unknown (safer than any)

let userInput: unknown;
userInput = 5;
userInput = "rudra";

//void (for function that dont return anything)
function subscribe(message: string): void {
  console.log(message);
}

//null and undefined

let u: undefined = undefined;
let n: null = null;

function abcd() {
  while (true) {}
}

abcd();
console.log("This will never be reached"); // This line will never be executed
