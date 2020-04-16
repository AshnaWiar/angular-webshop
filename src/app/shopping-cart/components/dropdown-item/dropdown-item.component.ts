import { Component, Input} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ShoppingCartItemInterface } from '@app/shopping-cart/models/shopping-cart-item-interface';
import { ShoppingCartService } from '@app/shopping-cart/shopping-cart.service';


@Component({
  selector: 'dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  host: {
    '[@closeItem]': 'isDeleted'
  },
  animations: [

    trigger('closeItem', [
      
      state('true', style({
          height: 0
      })),

      transition('* => *', [
        animate('0.1s')
      ]),

    ]),

    trigger('openCloseEditor', [

      state('open', style({
        'margin-top': 0,
        opacity: 1
      })),

      state('close', style({
        'margin-top': '-68px',
      })),

      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class DropdownItemComponent {
  public isEditorOpen: boolean;
  public isDeleted: boolean

  @Input('shoppingCartItem')
  public cartItem: ShoppingCartItemInterface

  constructor(private shoppingcartService: ShoppingCartService) { }

  triggerEditor($event: Event) {
    $event.preventDefault();
    this.isEditorOpen = !this.isEditorOpen;
  }

  onItemDelete() {
    this.shoppingcartService.remove(this.cartItem);
    this.isEditorOpen = !this.isEditorOpen;
    this.isDeleted = true;
  }

  closeEditor(){
    if(this.isEditorOpen){
      this.isEditorOpen = false;
    }
  }

}
