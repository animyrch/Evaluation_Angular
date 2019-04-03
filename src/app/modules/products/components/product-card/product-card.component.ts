import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product : IProduct;
  @Output() onDelete : EventEmitter<IProduct> = new EventEmitter();
  @Output() onUpdate : EventEmitter<string> = new EventEmitter();
  
  imgLink : string;
  counter: number [] = [];
  constructor(
    private cartSrv : CartService,
    private router : Router,
  ) { 
    
  }

  ngOnInit() {
    this.imgLink = `../../../assets/images/${this.product.type}.jpg`;
    this.loadData();
  }

  loadData(){
    for(let i = 1 ; i< 11 ; i++){
      this.counter.push(i);
    }
  }

  onChange(data){
    this.product.quantity = data;
  }
  delete(){

    this.onDelete.emit(this.product);
  }
  update(data){
    this.onUpdate.emit(this.product.id);
  }

  onSelectQuantity(data){
    this.product.quantity = data;
  }

  addToCart(){
    console.log("clicked on addtocart", this.product);
    this.cartSrv.pushNewProduct({...this.product});
    this.router.navigateByUrl("/cart/list");
  }

}
