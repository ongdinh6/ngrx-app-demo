import {Action} from "@ngrx/store";


export enum EnumCounterActions {
  INCREMENT = '[Counter] Counter increment',
  DECREMENT = '[Counter] Counter decrement',
  MULTIPLY_BY = '[Counter] Multiply By',
}


export class CounterIncrement implements Action {
  type: string = EnumCounterActions.INCREMENT;

  constructor() {
  }
}

export class CounterDecrement implements Action {
  type: string = EnumCounterActions.DECREMENT;

  constructor() {
  }

}


export class CounterMultiply implements Action {
  type: string = EnumCounterActions.MULTIPLY_BY;

  constructor() {
  }

}

export type CounterType = CounterIncrement | CounterDecrement | CounterMultiply;
