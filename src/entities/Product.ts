import { IProduct } from "../types/Product";
import { Book } from "./Book";
import { Notepad } from "./Notepad";
import { getPrice } from "../index";

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
    if (this instanceof Book) {
      console.log(
        `Книга - ${this.title} - ${this.title} - ${getPrice(this)}`
      );
    } else if (this instanceof Notepad) {
      console.log(`Блокнот - ${getPrice(this)}`);
    }
  }
}
