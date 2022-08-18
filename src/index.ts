import { Book, TypeBook } from "./entities/Book";
import { Notepad } from "./entities/Notepad";
import { Product } from "./entities/Product";
import { MyMap } from "./common/MyMap";
import { MapKey } from "./types/mapkey";
import { title } from "process";

// export const getPrice = (entity: Book | Notepad): string => {
//   return entity.price ? entity.price.toString() : "не продается";
// };

const getFrom = <T extends Product<any>, K extends MapKey = string>(
  obj: Record<K, T>,
  title: K
): T | undefined => {
  return obj[title];
};

export class Basket extends MyMap {}
const basket = new Basket();

const addToBasket = (quantity: any, item: any): void =>
  basket.set(quantity, item);

const main = () => {

  const books = {
    "Book 1": new Book("Book title 1", "author 1", TypeBook.OLD, "fantasy", 5),
    "Book 2": new Book("Book title 2", "author 2", TypeBook.NEW, "other"),
  };

  const notepads = {
    "Notepad 1": new Notepad("Notepad title 1", 5),
    "Notepad 2": new Notepad("Notepad title 2"),
  };
  
  addToBasket(5, {
    "title 1": new Book("title 1", "author 1", TypeBook.NEW, "fantasy", 1),
  });
  addToBasket(6, {
    "title 1": new Book("title 2", "author 2", TypeBook.NEW, "fantasy", 1),
  });
  console.log(basket.getAll());
  
};

main();