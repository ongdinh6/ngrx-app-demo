import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as loginActions from '../../store/user.actions';
import {Store} from "@ngrx/store";
import {IUserLoginState, IUserState} from "../../store/user.state";
import {delay, filter, Observable, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import * as fromUser from '../../store/user.reducer'
import {IAppState} from "../../store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  loading$: Observable<boolean> | undefined;
  success$: Observable<boolean> | undefined;
  error$: Observable<boolean> | undefined;
  destroy$: Subject<void> = new Subject();

  constructor(public store: Store<IAppState>, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(
        '',
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        '',
        [Validators.required]
      )
    })
    this.loading$ = this.store.select(fromUser.getLoginLoading).pipe(takeUntil(this.destroy$));
    this.success$ = this.store.select(fromUser.getLoginSuccess).pipe(takeUntil(this.destroy$));
    this.error$ = this.store.select(fromUser.getLoginFailure).pipe(takeUntil(this.destroy$));
    this.onLoginSuccess();
  }

  onSubmitLogin(loginData: FormGroup) {
    this.store.dispatch(new loginActions.Login({
      email: loginData.value.email,
      password: loginData.value.password
    }))

  }

  /*ngOnDestroy*/
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLoginSuccess() {
    if (this.success$)
      this.success$.pipe(
        filter(success => success),
        //đợi 3s sau khi login thành công,chuyển tới home page
        delay(3000),
      ).subscribe(success => {
        this.router.navigate(['home']);
      });
  }

}
