import { IProduct } from "../types/Product";
import { Book } from "./Book";
import { Notepad } from "./Notepad";
// import { basket } from "../index";

export class Product<T = any> {
  title: string;
  amount: number;
  price?: number;
  protected _type: T;

  constructor(title: string, amount: number, type: T, price?: number) {
    this.title = title;
    this.amount = amount;
    this._type = type;
    this.price = price;
  }

  type(): T {
    return this._type;
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
    console.log(`${this.title} - ${this._type} - ${this.price}`);
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