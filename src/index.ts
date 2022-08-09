import { Book } from "./entities/Book";
import { Notepad } from "./entities/Notepad";
import { Product } from "./entities/Product";
import { MyMap } from "./common/MyMap";
import { title } from "process";

export const basket: Array<Object> = [];

const main = () => {

  const books = {
    "Book 1": new Book("Book title 1", "author 1", "fantasy", 5),
    "Book 2": new Book("Book title 2", "author 2", "other"),
  };

  const notepads = {
    "Notepad 1": new Notepad("Notepad title 1", 5),
    "Notepad 2": new Notepad("Notepad title 2"),
  };
  
  books["Book 1"].buyIt();
  notepads["Notepad 1"].buyIt();

};

main();