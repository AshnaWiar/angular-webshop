import { ShoppingCartInterface } from './shopping-cart-interface';
import { ShoppingCartItemInterface } from './shopping-cart-item-interface';

export class ShoppingCart implements ShoppingCartInterface {


    private shoppingCart: Array<ShoppingCartItemInterface>;

    constructor(items?: Array<ShoppingCartItemInterface>) {
        this.shoppingCart = items === undefined ? [] : items;
    }

    /**
     * Adds an item to the shoppingCart.
     * 
     * If the item already exist in the shoppingCart only the amount will be updated.
     * 
     * @param item The item to store in the shoppingCart.
     */
    add(item: ShoppingCartItemInterface): void {

        if (!this.isItemAlreadyAdded(item)) {


            // break the reference from the parameter.
            const cartItem = Object.assign({}, item);

            this.shoppingCart.push(cartItem);
            return;
        }

        const cartItem = this.getItemFromCart(item);
        this.increaseCartItemAmount(cartItem, item.amount);
    }

    private increaseCartItemAmount(cartItem: ShoppingCartItemInterface, amount: number) {
        cartItem.amount += amount;
    }

    private isItemAlreadyAdded(item: ShoppingCartItemInterface) {
        return typeof this.getItemFromCart(item) !== "undefined";
    }

    private getItemFromCart(item: ShoppingCartItemInterface) {
        return this.shoppingCart.find(cartItem => cartItem.id = item.id);
    }

    /**
     * Removes the item from the shoppingCart,
     * by reducing the amount value of the stored ShoppingCartItemInterface in the shoppingCart.
     * 
     * If the shoppingCart doesn't contain ```item``` it will return false, otherwise true will be retured.
     * 
     * If the amount value of the stored item reaches zero or is below zero, the reference will be removed from the shoppingCart.
     * 
     * @param item The item to remove from the shoppingCart
     */
    remove(item: ShoppingCartItemInterface): boolean {

        if (!this.isItemAlreadyAdded(item)) {
            return false;
        }

        const cartItem = this.getItemFromCart(item);
        this.reduceItemAmount(cartItem, item.amount);
        return true;
    }

    private reduceItemAmount(cartItem: ShoppingCartItemInterface, amount: number) {
        const reducedAmount = cartItem.amount - amount;

        if (reducedAmount <= 0) {
            this.removeFromCart(cartItem);
        }

        cartItem.amount = reducedAmount;
    }

    private removeFromCart(cartItem: ShoppingCartItemInterface) {
        const indexOfCartItem = this.shoppingCart.indexOf(cartItem)
        this.shoppingCart.splice(indexOfCartItem, 1);
    }
    
    isEmpty(): boolean {
        return this.shoppingCart.length === 0;
    }

    getCartItems(): ShoppingCartItemInterface[] {
        return this.shoppingCart;
    }

    hasItems() {
        return this.getCartItems().length > 0;
    }

}
