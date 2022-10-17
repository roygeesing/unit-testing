import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { SortOrder } from './sort-order';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  public sortPizzas(pizzas: Pizza[], sortOrder: SortOrder = SortOrder.DESC): Pizza[] {
    pizzas.sort((a, b) => a.name.localeCompare(b.name));
    if (sortOrder === SortOrder.ASC) {
      return pizzas;
    } else {
      return pizzas.reverse();
    }
  }
}
