import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { combineLatest, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filterPizzas(pizzas$: Observable<Pizza[]>, filter$: Observable<string>): Observable<Pizza[]> {
    return combineLatest([
      pizzas$,
      filter$
    ]).pipe(
      map(([pizzas, filter]) => {
        const result: Pizza[] = [];
        for (const pizza of pizzas) {
          if (pizza.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
            result.push(pizza);
          }
        }
        return result;
      })
    );
  }
}
