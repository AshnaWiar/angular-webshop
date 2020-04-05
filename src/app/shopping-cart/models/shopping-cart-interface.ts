import { ShoppingCartItemInterface } from './shopping-cart-item-interface';

export interface ShoppingCartInterface {

    /**
     * Adds the shoppingCartItem to the shopping cart.
     * 
     * @param shoppingCartItem The item to add to the shopping cart.
     */
    add(shoppingCartItem: ShoppingCartItemInterface): void

    /**
     * Removes the shoppingCartItem from the shopping cart.
     * 
     * @param shoppingCartItem The item to be removed from the shopping cart.
     */
    remove(shoppingCartItem: ShoppingCartItemInterface): boolean

    /**
     * Check if the shoppingCart is empty.
     */
    isEmpty(): boolean

    /**
     * Returns all the items in the shopping cart.
     */
    getCartItems(): ShoppingCartItemInterface[]

    /**
     * Returns true if there are items in the shopping cart.
     */
    hasItems(): boolean;

}
