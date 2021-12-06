import {Component, OnInit} from '@angular/core';
import {ICounterState} from "../../store/state/counter.state";
import {Store} from "@ngrx/store";
import {CounterDecrement, CounterIncrement, CounterType} from "../../store/actions/counter.actions";
import {
  selectDecrementCounterState,
  selectIncrementCounterState,
  selectValueCounterState
} from "../../store/selectors/counter.selector";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  /*lay cac selector ra tu store*/
  value$ = this.store.select(selectValueCounterState);
  incrementCount$ = this.store.select(selectIncrementCounterState);
  decrementCount$ = this.store.select(selectDecrementCounterState);

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(new CounterIncrement());
  }

  decrement() {
    this.store.dispatch(new CounterDecrement());
  }
}
