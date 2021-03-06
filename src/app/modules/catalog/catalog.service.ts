import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../shared/services/data.service';
import { ICatalogItem, ICategory } from './models/catalog.model';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private service: DataService) { }

  getCatalog(): Observable<ICatalogItem[]> {
    const url = 'https://localhost:5001/api/v1/catalog'

    return this.service.get(url).pipe<ICatalogItem[]>(tap((response: any) => {
      return response;
    }));
  }

  getCategories(): Observable<ICategory[]> {
    const url = 'https://localhost:5001/api/v1/catalog/categories'

    return this.service.get(url).pipe<ICategory[]>(tap((response: any) => {
      return response;
    }));
  }
}
