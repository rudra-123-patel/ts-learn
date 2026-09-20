// union types (OR)

type Status = "pending" | "approved" | "rejected";

function setStatus(status: Status): void {
  console.log(`Status set to ${status}`);
}

setStatus("rejected"); // Valid
setStatus("approved"); // Valid
setStatus("pending"); // Valid
// setStatus("in progress"); // Error: Argument of type '"in progress"' is not assignable to parameter of type 'Status'.

// interaction types (AND)

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCicrcle :ColorfulCircle = {
  color: "red",
  radius: 10,
};
