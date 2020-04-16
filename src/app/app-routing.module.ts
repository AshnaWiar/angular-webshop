import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingPageComponent } from './shopping-cart/pages/billing/billing.component';
import { CartOverviewComponent } from './shopping-cart/pages/cart-overview/cart-overview.component';


const routes: Routes = [
  {
    path: 'checkout', children: [
      { path: '', redirectTo: 'cart', pathMatch: 'full' },
      { path: 'cart', component: CartOverviewComponent },
      { path: 'billing', component: BillingPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
