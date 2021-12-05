import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {StoreModule} from "@ngrx/store";
/*register reducer with store*/
import {AppEffects, reducers} from "./store/index";
import { HomeComponent } from './components/home/home.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot(AppEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
