import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-create-page',
  templateUrl: './product-create-page.component.html',
  styleUrls: ['./product-create-page.component.css']
})
export class ProductCreatePageComponent implements OnInit {

  constructor(
    private productSrv : ProductsService,
  ) { }

  ngOnInit() {
  }
  createProduct(data){
    this.productSrv.addProduct(data);
  }
}
