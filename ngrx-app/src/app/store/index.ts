import * as fromUserState from '../store/user.state'
import * as fromUserReducer from '../store/user.reducer'
import {ActionReducerMap} from "@ngrx/store";
import {AuthEffects} from './user.effects';
/*register reducer with store for using any where*/
export interface IAppState {
  userState: fromUserState.IUserState
}

export const reducers: ActionReducerMap<IAppState> = {
  /*IUserState is current state already exist in reducer*/
  userState: fromUserReducer.userReducer
}


export const AppEffects = [AuthEffects];

