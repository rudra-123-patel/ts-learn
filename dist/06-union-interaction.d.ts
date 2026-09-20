type Status = "pending" | "approved" | "rejected";
declare function setStatus(status: Status): void;
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
type ColorfulCircle = Colorful & Circle;
declare let myCicrcle: ColorfulCircle;
//# sourceMappingURL=06-union-interaction.d.ts.map