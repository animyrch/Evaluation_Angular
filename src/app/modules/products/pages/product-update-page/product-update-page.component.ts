import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update-page',
  templateUrl: './product-update-page.component.html',
  styleUrls: ['./product-update-page.component.css']
})
export class ProductUpdatePageComponent implements OnInit {

  productId : string;
  productToUpdate : IProduct;
  constructor(
    private productSrv : ProductsService,
    private route : ActivatedRoute
  ) { 
    this.productId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.productToUpdate = this.productSrv.getProductById(this.productId);
  }
  updateProduct(product: IProduct) {
    console.log("here" ,product);
    this.productSrv.updateById(this.productId, product);
  }
}
