import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
const uuidv4 = require('uuid/v4');
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products : IProduct[] = [
    {
      id : uuidv4(),
      description : "emballage eco. volume 500 ml.",
      price : 10,
      title : "liquide vaiselle",
      type : "cleaningProduct",
      quantity : 1
    },
    {
      id : uuidv4(),
      description : "lait en carton. volume 1 litre",
      price : 5,
      title : "lait",
      type : "foodProduct",
      quantity : 1
    },
  ];
  availableProductTypes : string[] = [
    "foodProduct",
    "cleaningProduct",
    "hygieneProduct"
  ];
  constructor() { }

  getProductById(productId){
    let indexOfItemToGet = this.products.findIndex(({id}) => id === productId);
    if(indexOfItemToGet!== -1){
      return this.products[indexOfItemToGet];
    }else{
      console.error('product not found');
    } 
  }
  addProduct(productInfo : IProduct){
  
    console.log("create this", productInfo);
    let productType = (!this.availableProductTypes.includes(productInfo.type)) ? "notFound" : productInfo.type;
    let productId = uuidv4();
    
    let newProduct:IProduct = {
      ...productInfo,
      id : productId,
      type : productType,
      quantity : 1
    };

    this.products.push(newProduct);
  }
  updateById(productId, newProduct){
    let indexOfItemToUpdate = this.products.findIndex(({id}) => id === productId);
    if (indexOfItemToUpdate !== -1) {
      this.products[indexOfItemToUpdate] = {
        ...newProduct,
        id : productId,
        quantity : 1,
        
      };
    }else{
      console.error('User to delete not found');
    }
    
  }
  deleteProductById(deletionId){
    let indexOfItemToDelete = this.products.findIndex(({id}) => id === deletionId);
    if(indexOfItemToDelete!== -1){
      this.products.splice(indexOfItemToDelete, 1);
    }else{
      console.error('product not found');
    } 
  }

  resetQuantity(){
    this.products.map(elem => {elem.quantity = 1});
  }

}
