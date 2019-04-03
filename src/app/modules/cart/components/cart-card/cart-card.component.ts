import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {

  @Input() product : IProduct;
  @Output() onDeleteCartItem : EventEmitter<IProduct> = new EventEmitter();
  calculatedPrice : number = 0;
  constructor() { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.calculatedPrice = Math.round((this.product.quantity * this.product.price) *100)/100;
  }
  delete(){
// console.log("delete this", this.product);
// console.log(this.product.id);
    this.onDeleteCartItem.emit(this.product);
  }

}
