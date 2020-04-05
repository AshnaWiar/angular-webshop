import { ShoppingCart } from '@app/shopping-cart/models/shopping-cart';
import { ShoppingCartItemInterface } from '@app/shopping-cart/models/shopping-cart-item-interface';

describe('ShoppingCart', () => {
  let shoppingCart: ShoppingCart;
  let dummyItemsArray = getDummyItemsArray();

  beforeEach(() => {
    shoppingCart = new ShoppingCart();
  });

  function getDummyItemsArray(): Array<ShoppingCartItemInterface> {
    return [getDummyItem('1'), getDummyItem('1'), getDummyItem('2')]
  }
  
  function getDummyItem(id: string): ShoppingCartItemInterface {
    return { id: id, name: 'Dummy item', amount: 10, price: 50 };
  }

  it('should create an instance', () => {
    expect(shoppingCart).toBeTruthy();
  });

  it('should return true when the shoppping cart is empty', () => {
    expect(shoppingCart.isEmpty()).toBeTrue();
  });

  it('should return false when the shopping cart is not empty', () => {
    expect(shoppingCart.isEmpty()).toBeTrue();
    shoppingCart.add(dummyItemsArray[0]);
    expect(shoppingCart.isEmpty()).toBeFalse();
  });

  it('should get all the items in the shopping cart', () => {
    shoppingCart.add(dummyItemsArray[0]);
    expect(shoppingCart.getCartItems().length).toBe(1);
  });

  it('should only have one item in the shopping cart', () => {
    shoppingCart.add(dummyItemsArray[0]);
    shoppingCart.add(dummyItemsArray[1]);

    const cartItems = shoppingCart.getCartItems();
    expect(cartItems.length).toBe(1);
  });

  it('should increase the stored item amount', () => {
    shoppingCart.add(dummyItemsArray[0]);
    shoppingCart.add(dummyItemsArray[1]);

    const cartItems = shoppingCart.getCartItems();
    expect(cartItems[0].amount).toBe(20);
  });

  it('should decrease the stored item amount', () => {
    shoppingCart.add(dummyItemsArray[0]);
    shoppingCart.add(dummyItemsArray[1]);

    let cartItems = shoppingCart.getCartItems();
    expect(cartItems[0].amount).toBe(20);

    shoppingCart.remove(dummyItemsArray[0]);

    cartItems = shoppingCart.getCartItems();
    expect(cartItems[0].amount).toBe(10);

  });
  
  it('should return false on removing a item not added', () => {
    const isRemoved = shoppingCart.remove(dummyItemsArray[0]);
    expect(isRemoved).toBeFalse();
  });


  it('should remove the stored item on zero amount', () => {
    shoppingCart.add(dummyItemsArray[0]);
    shoppingCart.add(dummyItemsArray[1]);

    let cartItems = shoppingCart.getCartItems();
    expect(cartItems[0].amount).toBe(20);

    shoppingCart.remove(dummyItemsArray[0]);
    shoppingCart.remove(dummyItemsArray[1]);

    cartItems = shoppingCart.getCartItems();
    expect(cartItems.length).toBe(0);
  });
  it('should return true if there are items in the shopping cart', () =>{
    shoppingCart.add(dummyItemsArray[0]);
    expect(shoppingCart.hasItems()).toBeTrue();
  });
});
