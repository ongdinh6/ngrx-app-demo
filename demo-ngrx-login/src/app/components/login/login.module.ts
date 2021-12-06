import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "../../effects/login/login.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class LoginModule { }
