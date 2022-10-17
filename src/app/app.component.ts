import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SortService } from './sort.service';
import { FilterService } from './filter.service';
import { BehaviorSubject, map } from 'rxjs';
import { SortOrder } from './sort-order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly ASC = SortOrder.ASC;
  public readonly DESC = SortOrder.DESC;

  private sortOrder$ = new BehaviorSubject(SortOrder.ASC);
  private filter$ = new BehaviorSubject('');

  public readonly pizzas = this.dataService.getAllPizzas();
  public readonly sortedPizzas$ = this.sortOrder$.pipe(
    map(sortOrder => this.sortService.sortPizzas(this.pizzas, sortOrder))
  );
  public readonly sortedAndFilteredPizzas$ = this.filterService.filterPizzas(this.sortedPizzas$, this.filter$);

  constructor(
    private readonly dataService: DataService,
    private readonly sortService: SortService,
    private readonly filterService: FilterService
  ) {}

  public onFilterChange(filter: string): void {
    this.filter$.next(filter);
  }

  public onSortChange(sort: SortOrder): void {
    this.sortOrder$.next(sort);
  }
}
