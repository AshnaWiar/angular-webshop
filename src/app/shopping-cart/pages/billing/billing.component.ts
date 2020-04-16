import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ShoppingCartService } from '@app/shopping-cart/shopping-cart.service';
import { ShoppingCartInterface } from '@app/shopping-cart/models/shopping-cart-interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'shopping-cart-billing-page',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingPageComponent implements OnInit, OnDestroy {

  private formGroup: FormGroup
  private subscription: Subscription;
  
  shippingCost: number;
  shoppingCart: ShoppingCartInterface;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.buildFormGroup()
    this.shoppingCart = this.shoppingCartService.getShoppingCart();

    this.subscription = this.shoppingCartService.onChange((shoppingCart) => {
      this.shoppingCart = shoppingCart;
    });

    this.shippingCost = 12 + (this.shoppingCart.getTotalPrice() / this.shoppingCart.getCartItems().length) / 10;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private buildFormGroup() {
    this.formGroup = new FormGroup({

      customerInformation: new FormGroup({
        email: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      }, Validators.required),

      addressInformation: new FormGroup({
        address: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        postal: new FormControl('', Validators.required),
        phone: new FormControl(''),
      })

    });
  }

  getFormGroup() {
    return this.formGroup;
  }

}
