import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../shared/services/data.service';
import { IBasket } from './models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private service: DataService) { }

  getBasket(): Observable<IBasket> {
    const url = 'https://localhost:5002/api/v1/basket'

    return this.service.get(url).pipe<IBasket>(
      tap((response: any) => {
        return response;
      }));
  }

  addItemToBasket(catalogItemId: string, quantity: number): Observable<Response> {
    const url = 'https://localhost:5002/api/v1/basket'
    const data = {
      catalogItemId: catalogItemId,
      quantity: quantity
    }
    return this.service.post(url, data)
  }


}
