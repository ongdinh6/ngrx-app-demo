/*
* File nay se chua state duoc luu trong store
* State nghia la chuyen gi se xay ra khi thuc hien action
* vi du: khi click thi loading icon se duoc hien thi
* day duoc coi la mot state
* Ban chat state la mot javascript object
* */

export interface IUserLoginState {
  loading: boolean;
  success: boolean;
  fail: boolean;
  email: string;
}

export interface IUserState {
  loginState: IUserLoginState;
}
