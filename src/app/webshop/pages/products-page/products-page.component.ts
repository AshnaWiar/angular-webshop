import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/webshop/product.service';
import { ShoppingCartService } from '@app/shopping-cart/shopping-cart.service';
import { Product } from '@app/webshop/models/product';
import { Subscription } from 'rxjs';
import { WebshopProduct } from '@app/webshop/models/webshopProduct';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: Product[];
  selectedProduct: WebshopProduct;
  showModal: boolean;
  private subscription: Subscription;

  constructor(
    private productService: ProductService,
    private shoppingCart: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.subscription = this.productService.getProducts().subscribe(
      (products: any[]) => {
        this.products = products;
        console.log(products);
      });
  }

  openModal($event: MouseEvent, product: Product) {
    $event.preventDefault();
    $event.stopImmediatePropagation();
    $event.stopPropagation();

    if(product.stock <= 0){
      return;
    }
    
    this.selectedProduct = product as WebshopProduct;
    this.selectedProduct.amount = 1;
    this.showModal = true;
  }

  addToBasket() {
    this.shoppingCart.add(this.selectedProduct);
    this.selectedProduct = undefined;
  }

}
