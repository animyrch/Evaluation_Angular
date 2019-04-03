import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list-page',
  templateUrl: './cart-list-page.component.html',
  styleUrls: ['./cart-list-page.component.css']
})
export class CartListPageComponent implements OnInit {

  cartProducts : IProduct[];
  calculatedTotalPrice : number = 0;
  constructor(
    private cartSrv : CartService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.cartProducts = this.cartSrv.productsInCart;
    console.log("this.cartProducts.length" , this.cartProducts.length );
    for(let i = 0 ; i< this.cartProducts.length ; i++){
      this.calculatedTotalPrice += Math.round((this.cartProducts[i].price * this.cartProducts[i].quantity)*100)/100;
    }
  
  }

  deleteCartItem(data:IProduct){
    console.log("deleting ths item", data);
    this.cartSrv.deleteItemById(data.id);
    this.calculatedTotalPrice -= Math.round((data.price * data.quantity)*100)/100;
  }

}
