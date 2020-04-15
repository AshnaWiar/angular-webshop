import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { DropdownTriggerService } from './dropdown-trigger.service';
import { ShoppingCartService } from '@app/shopping-cart/shopping-cart.service';
import { ShoppingCartInterface } from '@app/shopping-cart/models/shopping-cart-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-cart-navigation-dropdown',
  templateUrl: './navigation-dropdown.component.html',
  styleUrls: ['./navigation-dropdown.component.css'],
  host: {
    '[class.dropdown]': 'true',
    '[class.open]': 'isDropdownOpen',
  },
  providers: [
    DropdownTriggerService
  ]
})
export class NavigationDropdownComponent implements OnInit, OnDestroy {

  private isDropdownOpen: boolean;
  private subscriptions: Subscription[];
  private iconClass: string;
  shoppingCart: ShoppingCartInterface;

  constructor(
    private dropdownService: DropdownTriggerService,
    private shoppingCartService: ShoppingCartService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.updateIcon(this.shoppingCart.hasItems());
    this.registerListeners();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  private registerListeners() {
    this.subscriptions = this.subscriptions == undefined ? [] : this.subscriptions;

    this.subscriptions.push(this.dropdownService.onToggle().subscribe((isOpen: boolean) => {
      this.isDropdownOpen = isOpen;
    }));

    this.subscriptions.push(this.shoppingCartService.onChange((shoppingCart) => {
      this.onShoppingCartUpdate(shoppingCart);
    }));
  }

  private onShoppingCartUpdate(shoppingCart: ShoppingCartInterface) {
    this.shoppingCart = shoppingCart;
    this.updateIcon(shoppingCart.hasItems());
  }

  private updateIcon(cartHasItems: boolean) {
    this.iconClass = cartHasItems ? 'has-badge is-solid' : 'is-solid'
  }

  onOutSideClick(eventTarget: EventTarget) {
    if (this.el.nativeElement.contains(eventTarget)) {
      return;
    }

    this.dropdownService.toggle();
  }

  getIconClass() {
    return this.iconClass;
  }

  getShoppingCartItems() {
    return this.shoppingCart.getCartItems();
  }

  clearShoppingCart() {
    this.shoppingCartService.clear();
  }

}
