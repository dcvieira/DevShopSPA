export interface IBasket {
    id: string;
    items: IBasketItem[]
}

export interface IBasketItem {
    id: string;
    productId: string;
    productName: string;
    unitPrice: number;
    quantity: number;
    imgUrl: string;
}