import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { NavigationDropdownComponent } from './components/navigation-dropdown/navigation-dropdown.component';
import { DropdownTriggerDirective } from './components/navigation-dropdown/directives/dropdown-trigger.directive';
import { IfDropdownIsOpenDirective } from './components/navigation-dropdown/directives/if-dropdown-is-open.directive';
import { OutSideClickDirective } from './components/navigation-dropdown/directives/out-side-click.directive';
import { DropdownItemComponent } from './components/dropdown-item/dropdown-item.component';
import { BillingPageComponent } from './pages/billing/billing.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { ShoppingCartService } from './shopping-cart.service';
import { CartOverviewComponent } from './pages/cart-overview/cart-overview.component';

@NgModule({
  declarations: [
    NavigationDropdownComponent, DropdownTriggerDirective, 
    IfDropdownIsOpenDirective, OutSideClickDirective, 
    DropdownItemComponent, BillingPageComponent, CartOverviewComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [NavigationDropdownComponent, DropdownItemComponent, BillingPageComponent],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule { }
