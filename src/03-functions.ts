//basic function

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

// optional parameters (greeting is optional)

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!

//rest parameter

function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}


