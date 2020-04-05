import { Component, OnInit, ElementRef } from '@angular/core';
import { DropdownTriggerService } from './dropdown-trigger.service';
import { ShoppingCartService } from '@app/shopping-cart/shopping-cart.service';
import { ShoppingCartInterface } from '@app/shopping-cart/models/shopping-cart-interface';

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
export class NavigationDropdownComponent {

  private isDropdownOpen: boolean;
  private subscriptions = [];
  private iconClass: string;

  constructor(
    private service: DropdownTriggerService,
    private shoppingCartService: ShoppingCartService,
    private el: ElementRef
  ) {

    this.subscriptions.push(service.onToggle().subscribe((isOpen: boolean) => {
      this.isDropdownOpen = isOpen;
    }));

    this.subscriptions.push(shoppingCartService.onChange((shoppingCart: ShoppingCartInterface) => {
      this.onShoppingCartUpdate(shoppingCart);
    }));

    this.shoppingCartService.add({ id: '1', amount: 0, name: 'test', price: 10 })

  }


  onOutSideClick(eventTarget: EventTarget) {
    if (this.el.nativeElement.contains(eventTarget)) {
      return;
    }

    this.service.toggle();
  }

  onShoppingCartUpdate(shoppingCart: ShoppingCartInterface) {
    this.updateIcon(shoppingCart.hasItems());
  }

  updateIcon(cartHasItems: boolean) {
    this.iconClass = cartHasItems ? 'has-badge is-solid' : 'is-solid'
  }

  getIconClass() {
    return this.iconClass;
  }

}
