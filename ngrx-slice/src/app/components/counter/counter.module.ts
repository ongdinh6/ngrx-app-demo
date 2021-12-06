import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {FEATURE_NAME} from "../../app.const";
import {counterReducer} from "../../store/reducers/counter.reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    /*feature name o day la cai selectFeatureSelector o selector file*/
    StoreModule.forFeature(FEATURE_NAME, counterReducer)
  ]
})
export class CounterModule { }
