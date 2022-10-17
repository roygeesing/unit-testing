import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly pizzas: Pizza[] = [
    { name: 'Prosciutto' },
    { name: 'Prosciutto Fungi' },
    { name: 'Salami' },
    { name: 'Diavolo' },
    { name: 'Hawaii' }
  ];

  public getAllPizzas(): Pizza[] {
    return [...this.pizzas];
  }
}
