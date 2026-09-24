class Person {
  // properties
  private name: string;
  protected age: number;
  public email: string;

  // constructor

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // method

  public introduce(): string {
    return `hi i am ${this.name} and i am ${this.age} years old, you can reach me at ${this.email}`;
  }

  // getter

  public getName(): string {
    return this.name;
  }

  // setter

  public setName(name: string): void {
    this.name = name;
  }
}

class Employee {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}

  getDetails(): string {
    return `Employee ${this.name} works in ${this.department}`;
  }
}

let rudra = new Employee(1, "Rudra", "IT");
let raj = new Person("Raj", 30, "rjp@g.com");

console.log(rudra.getDetails());
console.log(raj.introduce());

class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number,
  ) {
    super(id, name, department);
  }

  getTeamInfo(): string {
    return `${this.name} manages ${this.teamSize}`;
  }
}
