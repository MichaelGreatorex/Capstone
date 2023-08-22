// this is where you need to start in oder to add those additional calculations to the cart page (tax/shipping)

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { productInfo } from 'src/app/shared/models/productinfo';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  addToCart(shirt:productInfo):void{
    let cartItem = this.cart.items.find(item => item.shirt.id === shirt.id);
    if(cartItem)
    alert('Already added');
    else
    this.cart.items.push(new CartItem(shirt));
    this.setCartToLocalStorage();
  }

  removeFromCart(shirtId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.shirt.id != shirtId);
    this.setCartToLocalStorage();
  }

  changeQuantity(shirtId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.shirt.id === shirtId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.shirt.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    this.cart.pricePlusVAT = this.cart.items.reduce((prevSum, currentItem) => prevSum + (currentItem.price * 1.1), 0)
    this.cart.pricePlusShipping = this.cart.items.reduce((prevSum, currentItem) => prevSum + (currentItem.price * 1.1) + 20, 0)
    this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
