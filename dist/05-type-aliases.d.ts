type Point = {
    x: number;
    y: number;
};
declare let point: Point;
type ID = string | number;
declare let userId: ID;
declare let productId: ID;
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}
declare let myDog: Dog;
interface Animal {
    age: number;
}
interface Animal {
    name: string;
}
declare let dog: Animal;
interface User {
    name: string;
    age: number;
}
type UserID = string | number;
//# sourceMappingURL=05-type-aliases.d.ts.map