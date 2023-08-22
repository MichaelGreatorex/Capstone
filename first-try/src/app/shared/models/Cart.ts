import { CartItem } from "./CartItem";

export class Cart{
  items:CartItem[] = [];
  totalPrice:number = 0;
  pricePlusVAT = 0;
  pricePlusShipping = 0;
  totalCount:number = 0;
}

