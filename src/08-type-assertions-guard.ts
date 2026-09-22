// type assertions (type casting)

let someValue: unknown = "Hello, TypeScript!";
// let strLength: number = someValue.length; // Error: Object is of type 'unknown'.

let strLength: number = (someValue as string).length;
//or
let strLength2: number = (<string>someValue).length;
