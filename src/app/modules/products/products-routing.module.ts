import { Routes } from '@angular/router';
import { LayoutProductsComponent } from './layout/layout-products/layout-products.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductCreatePageComponent } from './pages/product-create-page/product-create-page.component';
import { ProductUpdatePageComponent } from './pages/product-update-page/product-update-page.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: LayoutProductsComponent,
    children: [
      { path: '', redirectTo:"list", pathMatch: 'full'},
      { path: 'list', component: ProductListPageComponent },
      { path: 'create', component: ProductCreatePageComponent },
      { path: 'update/:id', component: ProductUpdatePageComponent }
    ]
  },
  
];
