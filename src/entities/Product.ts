import { IProduct } from "../types/Product";
import { Book } from "./Book";
import { Notepad } from "./Notepad";
// import { basket } from "../index";

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
    console.log(`${this.title} - ${this.type} - ${this.price}`);
  }
  buy(amount: number, money: number): void {
    if (!this.canBuy()) {
      console.log("Нет в наличии!");
    }
    if (this.amount < amount) {
      console.log("На складе нет товара!");
    }
    if (this.price && this.price * amount < money) {
      console.log(
        "Недостаточно средств"
      );
    }
    console.log("Товар приобретен!");
  }
}