import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './components/counter/counter.component';
import {StoreModule} from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    /*Add StoreModule.forRoot function in this line that will manages the state of the counter.
    The StoreModule.forRoot() method registers the global providers needed to access the Store throughout your application.*/
    StoreModule.forRoot({},{})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
