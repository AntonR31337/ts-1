import { IProduct } from "../types/Product";
import { Book } from "./Book";
import { Notepad } from "./Notepad";
import { basket } from "../index";

export class Product<T = any> implements IProduct<T> {
  title: string;
  amount: number;
  price?: number;
  type: T;
  entity: unknown;

  constructor(title: string, amount: number, type: T, price?: number) {
    this.title = title;
    this.amount = amount;
    this.type = type;
    this.price = price;
  }

  getPrice(): number | undefined {
    return this.price;
  }

  canBuy(): boolean {
    return typeof this.price === "number";
  }

  getAmount(): number {
    return this.amount;
  }
  showData(): void {
      console.log(
        `Товар ${this.title} стоимостью ${this.getPrice()}`
      );
  }
  buyIt(): void {
    basket.push(this);
    console.log('==========>');
    console.log(basket);
  }
}