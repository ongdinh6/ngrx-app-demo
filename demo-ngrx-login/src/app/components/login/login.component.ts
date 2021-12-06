import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/login.state";
import {User} from "../../store/model/user.model";
import {LoginAction} from "../../store/actions/login.actions";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as loginSelectors from "../../store/reducers/login.reducer";
import {Observable} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: User;
  errorMessage$ = this.store.select(loginSelectors.selectErrorMessage);

  constructor(private readonly store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });


  }

  onSubmit(loginData: FormGroup) {
    this.store.dispatch(new LoginAction({
      username: loginData.value.username,
      password: loginData.value.password,
    }));
  }
}
