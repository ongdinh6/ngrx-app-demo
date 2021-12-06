import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EnumLoginActions, LoginActionsType, LoginFailureAction, LoginSuccessAction} from "../actions/login.actions";
import {IAppState, ILoginState} from "../state/login.state";

const initialLoginState: ILoginState = {
  fullName: '',
  success: false,
  failed: false,
  errorMessage: ''
}
const initialState: IAppState = {
  loginAppState: initialLoginState
}

export function loginReducer(state = initialState, actions: LoginActionsType): IAppState {
  switch (actions.type) {
    case EnumLoginActions.LOGIN:
      return {
        ...state,
        loginAppState: {
          ...state.loginAppState
        },
      }

    case EnumLoginActions.LOGIN_SUCCESS:
      return {
        ...state,
        loginAppState: {
          ...state.loginAppState,
          success: true,
          fullName: actions instanceof LoginSuccessAction ? actions.payload : ''
        }
      }

    case EnumLoginActions.LOGIN_FAILURE:
      return {
        ...state,
        loginAppState: {
          ...state.loginAppState,
          failed: true,
          errorMessage: actions instanceof LoginFailureAction ? actions.payload : ''
        }
      }

    default:
      return state;
  }
}

export const FEATURE_NAME = 'featureSelector'
export const selectFeature = createFeatureSelector<IAppState>(FEATURE_NAME)

export const selectFullName = createSelector(selectFeature, state => state.loginAppState.fullName ? state.loginAppState.fullName : '')
export const selectErrorMessage = createSelector(selectFeature, state => state.loginAppState ? state.loginAppState.errorMessage : '')
