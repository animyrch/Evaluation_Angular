import { Routes } from '@angular/router';
import { LayoutCartComponent } from './layout/layout-cart/layout-cart.component';
import { CartListPageComponent } from './pages/cart-list-page/cart-list-page.component';
export const CartsRoutes: Routes = [
  {
    path: '',
    component: LayoutCartComponent,
    children: [
      { path: '', redirectTo:"list", pathMatch: 'full'},
      { path: 'list', component: CartListPageComponent },
    ]
  },
  
];
