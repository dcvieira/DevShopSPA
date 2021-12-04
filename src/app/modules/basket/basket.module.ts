import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';


@NgModule({
  declarations: [
    ShoppingBasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
