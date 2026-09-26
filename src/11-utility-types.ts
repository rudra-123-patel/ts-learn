interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  assignedTo: string;
}

// partial - make all properties optional

type PartialTodo = Partial<Todo>;

let updatedTodo: PartialTodo = {
  completed: true,
};

//required - make all properties required

type RequiredTodo = Required<Todo>;

// readonly - make all properties readonly

type ReadonlyTodo = Readonly<Todo>;

let myTodo: ReadonlyTodo = {
  title: "Learn TypeScript",
  description: "Learn TypeScript utility types",
  completed: false,
  createdAt: new Date(),
  assignedTo: "Rudra",
};

// myTodo.completed = true;

// pick - select specific properties from a type

type TodoPreview = Pick<Todo, "title" | "description">;

// Omit - exclude specific properties from a type

type TodoWithoutDate = Omit<Todo, "createdAt">;
type TodoWithoutAssign = Omit<Todo, "assignedTo">;

