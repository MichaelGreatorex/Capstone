import { productInfo } from "./productinfo";

export class CartItem{
  constructor(public shirt:productInfo) { }
  quantity:number = 1;
  price: number = this.shirt.price;
  }

