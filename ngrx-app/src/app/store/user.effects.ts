import * as authAction from '../store/user.actions';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../store/auth.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<authAction.Login>(authAction.EnumUserActions.LOGIN),
    switchMap(action => {
      const { email, password } = action.payload;
      return this.authService.login({email, password}).pipe(
        map(res => new authAction.LoginSuccess(email)),
        catchError(e => of(new authAction.LoginFail()))
      );
    })
  );
 @Effect({dispatch: false})
  loginDone$ = this
    .actions$
    .pipe(ofType < authAction.LoginSuccess> (authAction.EnumUserActions.LOGIN_SUCCEED), tap(action => {
      this.router.navigate(['/home'])
    }));

  constructor(private http: HttpClient, private actions$: Actions, private authService: AuthService, private router: Router) {}
}
