import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/i-product';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-edition',
  templateUrl: './product-edition.component.html',
  styleUrls: ['./product-edition.component.css']
})
export class ProductEditionComponent implements OnInit {

  @Input() product : IProduct;
  @Output() onSaveProduct : EventEmitter<IProduct> = new EventEmitter();
  productForm : FormGroup;
  productTypes : string[];
  
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private productSrv : ProductsService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.productTypes = this.productSrv.availableProductTypes;
  }

  initForm():any{
    //console.log("initing", this.product);
    this.productForm = this.fb.group({
      title : [''],
      description : [''],
      price : [],
      type : ['']
    })

    if(this.product){
      console.log(this.product);
      this.patchForm();
    }

  //   id : string,
  // title : string,
  // description : string,
  // price : number,
  // quantity? : number,
  // type : string
  }

  patchForm(){
    let productToPatch = this.productSrv.getProductById(this.product);
      
    this.productForm.patchValue(productToPatch);
  }

  saveProduct(){
    let { value } = this.productForm;
    //console.log("value", value);
    this.onSaveProduct.emit(value);
    this.router.navigateByUrl("/product/list");
  }
}
