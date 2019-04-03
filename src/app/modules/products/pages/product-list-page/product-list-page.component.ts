import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  products : IProduct[];

  constructor(
    private productSrv : ProductsService,
    private route : Router
  ) { }

  ngOnInit() {
    console.log(this.productSrv.products);
    this.loadData();
  }

  loadData():any{
    //reseting quantity to remove  previous selections if any 
    this.productSrv.resetQuantity();
    this.products = this.productSrv.products;

  }

  deleteProduct(data:IProduct){
    //console.log("deleting", data.id);
   this.productSrv.deleteProductById(data.id);
  }

  updateProduct(data){
    //console.log("data ? ", data);
    this.route.navigate(['/product/update', data]);
  }

}
