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

// record - construct object type with
//          specific keys and value type

type PageInfo = {
  title: string;
  url: string;
};

type Pages = "home" | "about" | "contact";

type Merged = Record<Pages, PageInfo>;

let pages: Merged = {
  home: {
    title: "Home",
    url: "/",
  },
  about: {
    title: "About",
    url: "/about",
  },
  contact: {
    title: "Contact",
    url: "/contact",
  },
};

// return type - ger return type of function

function createUser() {
  return {
    id: 1,
    name: "rudra",
    email: "rjp@g.co",
  };
}

type UserType = ReturnType<typeof createUser>;
