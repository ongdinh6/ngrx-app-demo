import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/login.state";
import {selectFullName} from "../../store/reducers/login.reducer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullName$ = this.store.select(selectFullName);

  constructor(private readonly store: Store<IAppState>) { }

  ngOnInit(): void {
  }

}
