import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {LoginService} from "../../services/login.service";
import * as loginActions from "../../store/actions/login.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";


@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, private https$: LoginService, private router: Router) {
    console.log("login effects")
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType<loginActions.LoginAction>(loginActions.EnumLoginActions.LOGIN),
    switchMap(action => {
      return this.https$.doLogin(action.payload).pipe(
        map(res => new loginActions.LoginSuccessAction(res)),
        catchError(errorMessage => of(new loginActions.LoginFailureAction(errorMessage)))
      )
    })
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType<loginActions.LoginSuccessAction>(loginActions.EnumLoginActions.LOGIN_SUCCESS),
    tap(()=>this.router.navigate(['/home']))
  )


}
