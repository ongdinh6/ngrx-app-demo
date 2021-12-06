import { Injectable } from '@angular/core';
import {User} from "../store/model/user.model";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(user: User): Observable<any> {
    console.log('user service', user)
    if(user.username !== 'tomholland') {
      return throwError('Username different with \'tomholland\'. Try again!')
    }
    return new Observable<any>(fullName => fullName.next('Tom Holland'));
  }
}
