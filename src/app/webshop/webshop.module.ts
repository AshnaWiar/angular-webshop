import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
})
export class WebshopModule { }
