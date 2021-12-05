/* defined action to express events */
import {Action} from "@ngrx/store";

export enum EnumTypeCounterActions {
  DEPOSIT = "[Counter] Deposit Counter",
  WITHDRAW = "[Counter] Withdraw Counter",
}

export class DepositCounter implements Action {
  type: string = EnumTypeCounterActions.DEPOSIT;

  constructor(public payload: number) {
  }
}

export class WithdrawCounter implements Action {
  type: string = EnumTypeCounterActions.WITHDRAW;

  constructor(public payload: number) {
  }
}

export type CounterActionType = DepositCounter | WithdrawCounter;
