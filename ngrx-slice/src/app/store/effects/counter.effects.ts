/*day cung chi la mot service class binh thuong thoi*/

import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {CounterMultiply} from "../actions/counter.actions";
import * as counterActions from '../actions/counter.actions';
import {selectValueCounterState} from "../selectors/counter.selector";

@Injectable()
export class CounterEffects {
  constructor(
    /*inject some thing at here*/

    /*
    *?tai sao o day lai can cai actions nay ?
    * khi ma chung ta dispatch mot action, thi action stream cua effect se emit du lieu ra
    */
    private readonly actions: Actions,

    /*tai sao phai su dung store nay? store nay o day de co the lay duoc gia tri hien tai cua count*/
    private readonly store: Store
  ) {}

  /*mutiply*/
  @Effect()
  /*action nay co tac dung la trigger effects*/
  multiplyBy$ = this.actions.pipe(
    ofType<counterActions.CounterMultiply>(counterActions.EnumCounterActions.MULTIPLY_BY),
    concatLatestFrom(()=>this.store.select(selectValueCounterState))
  )

}

