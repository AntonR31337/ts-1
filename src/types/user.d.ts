export class User {
    name: string
    surname: string
    login: string
    birhthday: string
    password: string
        constructor(
            name: string, 
            surname: string, 
            login: string, 
            birhthday: string, 
            password: string)
            
    addToBasket(basket: any[], quantity: number, item: object): void
    deleteFromBasket(basket: any[], item: object): void
    getTotallPrice(basket: any[]): number
}