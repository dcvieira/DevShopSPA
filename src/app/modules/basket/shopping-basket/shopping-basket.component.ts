import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BasketService } from '../basket.service';
import { IBasket, IBasketItem } from '../models/basket.model';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {
  basket?: IBasket;
  totalPrice = 0;

  constructor(private service: BasketService) { }

  ngOnInit(): void {
    this.service.getBasket().subscribe(
      (response: IBasket) => {
        this.basket = response;
        this.calculateTotalPrice();
      }
    );
  }


  private calculateTotalPrice() {
    this.totalPrice = 0;
    if (this.basket) {
      this.basket.items.forEach(item => {
        this.totalPrice += (item.unitPrice * item.quantity);
      });
    }
  }

}
