
/*
* File nay se thuc hien cap nhat lai cac state truoc khi day vao store
* Ban chat reducer la mot pured function, handle to change state
* */

import {IUserLoginState, IUserState} from "./user.state";
import {EnumUserActions, Login, LoginSuccess, UserActionType} from "./user.actions";
import {IAppState} from "./index";
import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";

/*tai sao state lai duoc khai bao la const, vi khong co cach nao thay doi state truc tiep
* bat buoc phai qua reducer moi co the thay doi duoc*/
const initialLoginState: IUserLoginState = {
  loading: false,
  success: false,
  fail: false,
  email: ''
}

const initialUserState: IUserState = {
  loginState: initialLoginState
}

export function userReducer(state = initialUserState, actions: UserActionType): IUserState {
  switch (actions.type) {
    case EnumUserActions.LOGIN:

      /*return ra mot object moi nen thang con no se biet duoc cha thay doi*/
      return {
        ...state,
        loginState: {
          ...initialLoginState,
          loading: true
        }
      }

    case  EnumUserActions.LOGIN_SUCCEED:
      return {
        ...state,
        loginState: {
          ...state.loginState,
          loading:false,
          success:true,
          email: actions instanceof LoginSuccess ? actions.username : ''
        }
      }

    case  EnumUserActions.LOGIN_FAIL:
      return {
        ...state,
        loginState: {
          ...state.loginState,
          loading:false,
          fail:true
        }
      }

    default:
      return state;
  }
}

export const getLoginLoading = (state: IAppState) => state.userState.loginState.loading;
export const getLoginSuccess = (state: IAppState) => state.userState.loginState.success;
export const getLoginFailure = (state: IAppState) => state.userState.loginState.fail;
export const getEmailLogin = (state: IAppState) => state.userState.loginState.email ? state.userState.loginState.email : '';

/*way 2: get items on state in store*/
//to back to IAppState we can see this interface included one property is userState, so featureName when we createFeatureSelector is that it.
const loginStore = createFeatureSelector<IAppState>("userState");

export const getLoginLoadingSelector = createSelector(loginStore, state => state.userState.loginState.loading)
export const getEmailLoginSelector = createSelector(loginStore, state => state.userState.loginState.email)
