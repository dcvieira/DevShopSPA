import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BasketService } from '../../basket/basket.service';
import { CatalogService } from '../catalog.service';
import { ICatalogItem, ICategory } from '../models/catalog.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogItems$: Observable<ICatalogItem[]> = new Observable<ICatalogItem[]>();
  categories$: Observable<ICategory[]> = new Observable<ICategory[]>();

  constructor(private catalogService: CatalogService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.catalogItems$ = this.catalogService.getCatalog().pipe(
      catchError((error) => {
        return of([]);
      })
    );

    this.categories$ = this.catalogService.getCategories().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  // ToDo: Use a basket service wrapper
  addToCart(item: ICatalogItem): void {
    this.basketService.addItemToBasket(item.id, 1).subscribe((response: any) => {
      alert('item Added')
    })
  }

}
