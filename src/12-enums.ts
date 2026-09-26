enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Right;

// string enum

enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

let stat: Status = Status.Approved;

export {};

// const enum (more perfoemant)4

const enum HttpsStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

function handleResponse(status: HttpsStatus): void {
  if (status === HttpsStatus.OK) {
    console.log("Success");
  }
}
