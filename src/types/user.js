export class User {
    constructor(name, surname, login, birhthday, password) {
        this.name = name,
        this.surname = surname,
        this.login = login,
        this.birhthday = birhthday,
        this.password = password
    }
    addToBasket(basket, quantity, item) {
        basket.set(quantity, item);
    }
    deleteFromBasket(basket, item) {
        basket.remove(item);
    }
    getTotallPrice(basket) {
        return basket.getAll.reduce((acc, item) => item[1].getPrice() + acc, 0)
    }
}