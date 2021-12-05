/*defined a reducer function to manage the state of the counter*/
import {Action} from "@ngrx/store";
import {CounterActionType, EnumTypeCounterActions} from "../actions/counter.actions";


const initialState = {

}

export function counterReducer(state = initialState, actions: CounterActionType) {
  switch (actions.type) {

    case EnumTypeCounterActions.DEPOSIT:
      return {
        ...state,
        actions: {

        }
      }

    default:
      return state;
  }
}
