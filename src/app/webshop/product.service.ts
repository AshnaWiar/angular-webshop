import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { environment } from 'src/environments/environment.prod';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private resourceEndpoint: string;

  constructor(private api: ApiService) {
    this.resourceEndpoint = 'product';
  }

  getProducts(queryParameters?: Object) {
    return this.api.get<any[]>(this.resourceEndpoint, queryParameters)
  }

}
