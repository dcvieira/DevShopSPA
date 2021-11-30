import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CatalogService } from '../catalog.service';
import { ICatalogItem } from '../models/catalogItem.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogItems$: Observable<ICatalogItem[]> = new Observable<ICatalogItem[]>();

  constructor(private service: CatalogService) { }

  ngOnInit(): void {
    this.catalogItems$ = this.service.getCatalog().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

}
