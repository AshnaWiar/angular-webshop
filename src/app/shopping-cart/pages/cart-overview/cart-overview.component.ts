import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '@app/shopping-cart/shopping-cart.service';
import { ShoppingCart } from '@app/shopping-cart/models/shopping-cart';
import { ShoppingCartInterface } from '@app/shopping-cart/models/shopping-cart-interface';
import { ShoppingCartItemInterface } from '@app/shopping-cart/models/shopping-cart-item-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.css']
})
export class CartOverviewComponent implements OnInit, OnDestroy{

  private subscription: Subscription;

  shoppingCart: ShoppingCartInterface;
  selected: ShoppingCartItemInterface[];
  isEditMode: boolean
  rowSelection: boolean;

  canUpdateCart: boolean;
  updateAmount: number;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(){
    this.canUpdateCart = true;
    this.updateAmount = 1;

    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.subscription = this.shoppingCartService.onChange((shoppingCart) => {

      if (!this.canUpdateCart) {
        return;
      }

      this.shoppingCart = shoppingCart;

    });

    this.selected = [];
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onRemove() {
    this.selected.forEach((cartItem) => {
      this.shoppingCartService.remove(cartItem);
    });
  }

  onEdit() {
    this.isEditMode = true;
    console.log(this.selected);
    
    this.updateAmount = this.selected[0].amount;
  }

  onSave() {
    this.canUpdateCart = false;
    this.selected[0].amount = this.updateAmount;

    this.shoppingCartService.clear();
    this.shoppingCart.getCartItems().forEach(cartItem => {
      this.shoppingCartService.add(cartItem);
    });
    
    this.canUpdateCart = true;   
    this.selected = [];
    this.disableEditMode();
  }

  isSelected(cartItem: ShoppingCartItemInterface){
    return this.selected.includes(cartItem);
  }

  onSelectionChange(event){
    this.disableEditMode();
  }

  private disableEditMode(){
    this.updateAmount = 1;
    this.isEditMode = false;
  }

}
