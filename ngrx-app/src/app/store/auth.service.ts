import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../store/user.model';
import {Observable, of, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(userCredentials: User): Observable<any> {
    console.log(userCredentials);
    if (userCredentials.email !== 'test@gmail.com') {
      return throwError('Invalid username or password');
    }
    return of({email: 'UserLoginSuccessfully'});
  }
}
