import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInCart : IProduct[] = [
  ]
  constructor() { }

  pushNewProduct(product : IProduct){
    this.productsInCart.push(product);
  }

  deleteItemById(deletionId : string){
    let indexOfItemToDelete = this.productsInCart.findIndex(({id}) => id === deletionId);
    if(indexOfItemToDelete!== -1){
      this.productsInCart.splice(indexOfItemToDelete, 1);
    }else{
      console.error('product not found');
    } 
  }
}
