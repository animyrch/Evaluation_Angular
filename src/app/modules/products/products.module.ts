import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './products-routing.module';
import { ProductCreatePageComponent } from './pages/product-create-page/product-create-page.component';
import { ProductUpdatePageComponent } from './pages/product-update-page/product-update-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductEditionComponent } from './components/product-edition/product-edition.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LayoutProductsComponent } from './layout/layout-products/layout-products.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductCreatePageComponent,
    ProductUpdatePageComponent,
    ProductListPageComponent,
    ProductEditionComponent,
    ProductCardComponent,
    LayoutProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    SharedModule
  ]
})
export class ProductsModule { }
