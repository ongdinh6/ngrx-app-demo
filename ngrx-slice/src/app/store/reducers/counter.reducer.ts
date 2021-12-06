import {CounterType, EnumCounterActions} from "../actions/counter.actions";
import {ICounterState} from "../state/counter.state";

/*WE CAN CALL REDUCER FOR WRITE ACTIONS. SO HOW CAN I READ STATE IN STORE ?==> Selector*/
export const initialState: ICounterState = {
  value: 0,
  incrementCount: 0,
  decrementCount: 0,
}

/*defined reducer functions to manage the state of the counter*/
export function counterReducer(state = initialState, actions: CounterType): ICounterState {
  /*check 2 case reducer for 2 actions */
  switch (actions.type) {
    /*case increment was be called, update value to increment one value*/
    case EnumCounterActions.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        incrementCount: state.incrementCount + 1
      }

    case EnumCounterActions.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        decrementCount: state.decrementCount + 1
      }
    default:
      return state;
  }
}
