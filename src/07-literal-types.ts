// string literal types

let direction: "north" | "south" | "east" | "west";
direction = "north"; // Valid
direction = "south"; // Valid
// direction = "up"; // Error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'.

// numeric literal types

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 3; // Valid
// diceRoll = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.

// combined literal types

type SucessResponse = {
  status: "success";
  data: any;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SucessResponse | ErrorResponse;
