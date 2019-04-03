import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'product',
    pathMatch : 'full'
  },
  {
    path: 'product',
    loadChildren : './modules/products/products.module#ProductsModule'
  },
  {
    path: 'cart',
    loadChildren : './modules/cart/cart.module#CartModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
