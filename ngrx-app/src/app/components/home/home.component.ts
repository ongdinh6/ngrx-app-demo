import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {IUserState} from "../../store/user.state";
import {Store} from "@ngrx/store";
import * as fromUser from '../../store/user.reducer';
import {IAppState} from "../../store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  emailLogin$: Observable<string> | undefined;
  loading$: Observable<boolean> | undefined;
  destroy$: Subject<void> = new Subject();
  constructor(private store: Store<IAppState>) {

  }

  ngOnInit(): void {
    console.log()
    this.emailLogin$ = this.store.select(fromUser.getEmailLogin).pipe(takeUntil(this.destroy$));
    console.log('email', this.emailLogin$)
    this.loading$ = this.store.select(fromUser.getLoginLoading).pipe(takeUntil(this.destroy$));
  }
  /*ngOnDestroy*/
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
