// Generics in TS
function identity<MyType>(arg: MyType): MyType {
  return arg;
}

let output1 = identity<string>("Hello Generics");
let output2 = identity<number>(42);

// generics with array

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let myNum = getFirstElement([1, 2, 3]); // returns 1
let myName = getFirstElement(["Rudra", "Patel"]); // returns "Rudra"

console.log(myNum);
console.log(myName);

// generics with interface

// interface KeyValuePair<K, V> {
//   key: K;
//   value: V;
// }

// let stringNumberPair: KeyValuePair<string, number> = {
//   key: "age",
//   value: 30,
// };

interface KeyValuePair<K, V> {
  key: {
    name: string;
    myKey: K;
  };
  value: V;
}

let stringNumberPair: KeyValuePair<string, number> = {
  key: {
    name: "Rudra",
    myKey: "22",
  },
  value: 30,
};

// generics with class

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getItem(): T[] {
    return [...this.data];
  }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Rudra");
textStorage.addItem("Patel");
textStorage.removeItem("Rudra");
textStorage.getItem(); // returns ["Patel"]

//generics constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}
