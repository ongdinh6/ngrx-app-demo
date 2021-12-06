import {Action} from "@ngrx/store";
import {User} from "../model/user.model";

export enum EnumLoginActions {
  LOGIN = '[User] Login',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGIN_FAILURE = '[User] Login Failure'
}

export class LoginAction implements Action {
  type: string = EnumLoginActions.LOGIN;

  constructor(public payload: User) {
  }
}

export class LoginSuccessAction implements Action {
  type: string = EnumLoginActions.LOGIN_SUCCESS;

  constructor(public payload: string) {
  }
}

export class LoginFailureAction implements Action {
  type: string = EnumLoginActions.LOGIN_FAILURE;

  constructor(public payload: string) {
  }
}


export type LoginActionsType = LoginAction | LoginSuccessAction | LoginFailureAction;
