import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ShoppingCart } from './models/shopping-cart';
import { ShoppingCartInterface } from './models/shopping-cart-interface';
import { ShoppingCartItemInterface } from './models/shopping-cart-item-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private localstorageKey: string;
  private shoppingCartEventEmitter: EventEmitter<ShoppingCartInterface>;

  constructor() {
    this.localstorageKey = environment.localstorageKeys.shoppingCart;
    this.shoppingCartEventEmitter = new EventEmitter();
  }

  add(shoppingCartItem: ShoppingCartItemInterface) {
    const cart = this.getShoppingCart();
    cart.add(shoppingCartItem);
    this.storeShoppingCart(cart);
  }

  remove(shoppingCartItem: ShoppingCartItemInterface) {
    const cart = this.getShoppingCart();
    cart.remove(shoppingCartItem);
    this.storeShoppingCart(cart);
  }

  onChange(callback: (shoppingCart: ShoppingCartInterface) => void) {
    return this.shoppingCartEventEmitter.subscribe(callback);
  }

  clear() {
    this.storeShoppingCart(new ShoppingCart());
  }

  getShoppingCart(): ShoppingCartInterface {
    let shoppingCartItems = this.getShoppingCartItemsFromLocalStorage()

    if (shoppingCartItems === null) {
      shoppingCartItems = [];
    }

    return new ShoppingCart(shoppingCartItems);
  }

  private getShoppingCartItemsFromLocalStorage(): Array<ShoppingCartItemInterface> {
    return JSON.parse(localStorage.getItem(this.localstorageKey));
  }

  private storeShoppingCart(shoppingCart: ShoppingCartInterface) {
    const stringifiedCartItems = JSON.stringify(shoppingCart.getCartItems());
    localStorage.setItem(this.localstorageKey, stringifiedCartItems);
    this.shoppingCartEventEmitter.emit(shoppingCart);
  }

}
