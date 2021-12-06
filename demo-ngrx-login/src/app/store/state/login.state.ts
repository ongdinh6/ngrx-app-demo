

export interface ILoginState {
  fullName: string;
  success: boolean;
  failed: boolean;
  errorMessage: string;
}

export interface IAppState {
  loginAppState: ILoginState;
}
