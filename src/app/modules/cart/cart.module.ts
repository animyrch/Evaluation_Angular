import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartListPageComponent } from './pages/cart-list-page/cart-list-page.component';
import { CartsRoutes } from './cart-routing.module';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { LayoutCartComponent } from './layout/layout-cart/layout-cart.component';
import { CartEditionComponent } from './components/cart-edition/cart-edition.component';

@NgModule({
  declarations: [
    CartListPageComponent,
    CartEditionComponent,
    CartCardComponent,
    LayoutCartComponent,
    CartListPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CartsRoutes),
    //SharedModule
  ]
})
export class CartModule { }
