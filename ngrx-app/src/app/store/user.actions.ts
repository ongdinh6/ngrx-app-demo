/*
* File nay se luu toan bo cac actions co the co tren view
* Dinh nghia cac action
* */

import {Action} from "@ngrx/store";
import {User} from "./user.model";

/*the best practices*/
export enum EnumUserActions {
  LOGIN = '[Login] User Login',
  LOGIN_SUCCEED = '[Login] User Login Success',
  LOGIN_FAIL = '[Login] User Login Fail'
}

export class Login implements Action {
  readonly type: string = EnumUserActions.LOGIN;

  constructor(public payload: User) {
  }
}

export class LoginSuccess implements Action {
  readonly type: string = EnumUserActions.LOGIN_SUCCEED;

  constructor(public username: string) {
  }
}

export class LoginFail implements Action {
  readonly type: string = EnumUserActions.LOGIN_FAIL;

  constructor() {
  }
}

export type UserActionType = Login | LoginSuccess | LoginFail;
