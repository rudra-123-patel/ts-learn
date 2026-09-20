interface User {
    name: string;
    age: number;
    email?: string;
    readonly id: number;
}
declare let user: User;
interface Product {
    name: string;
    price: number;
    getDiscountedPrice(percent: number): number;
}
declare let laptop: Product;
//# sourceMappingURL=04-object-interfaces.d.ts.map