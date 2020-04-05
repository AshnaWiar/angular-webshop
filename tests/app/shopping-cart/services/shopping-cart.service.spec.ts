import { TestBed } from '@angular/core/testing';

import { ShoppingCartService } from '@app/shopping-cart/shopping-cart.service';
import { ShoppingCart } from '@app/shopping-cart/models/shopping-cart';
import { environment } from 'src/environments/environment';
import { ShoppingCartItemInterface } from '@app/shopping-cart/models/shopping-cart-item-interface';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartService);
    localStorage.clear()
  });

  function getShoppingCartItemsFromStorage(): ShoppingCartItemInterface[] {
    return JSON.parse(localStorage.getItem(environment.localStorageShoppingCartKey))
  }

  function getDummyShoppingItem(id: string) {
    return { id: id, name: 'test', amount: 1, price: 10 };
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a product to the shopping cart and update the LocalStorage', () => {
    const dummyShoppingCartItem = getDummyShoppingItem('1');
    service.add(dummyShoppingCartItem);

    const shoppingCartItems = getShoppingCartItemsFromStorage();
    expect(shoppingCartItems).toBeTruthy();
    expect(shoppingCartItems[0].id).toBe(dummyShoppingCartItem.id);
  });


  it('should remove a product to the shopping cart and update the LocalStorage', () => {
    const dummyShoppingCartItems = [getDummyShoppingItem('1'), getDummyShoppingItem('2')];
    const stringifiedShoppingCartItems = JSON.stringify(dummyShoppingCartItems);

    localStorage.setItem(environment.localStorageShoppingCartKey, stringifiedShoppingCartItems);
    service.remove(dummyShoppingCartItems[0]);

    const storageData = getShoppingCartItemsFromStorage() 
    expect(storageData.length).toBe(1);
    expect(storageData[0].id).toBe(dummyShoppingCartItems[1].id);
  });

  
});
