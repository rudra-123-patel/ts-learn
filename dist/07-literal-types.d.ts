declare let direction: "north" | "south" | "east" | "west";
declare let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
type SucessResponse = {
    status: "success";
    data: any;
};
type ErrorResponse = {
    status: "error";
    message: string;
};
type ApiResponse = SucessResponse | ErrorResponse;
//# sourceMappingURL=07-literal-types.d.ts.map