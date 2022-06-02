import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ElementRef, ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable, observable, throwError } from 'rxjs';
import { Login } from './Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  username?: '';
  loginElement!: ElementRef;
  welcomeElement!: ElementRef;
  users: Login[] = [];
  ConfigUrl = './assets/creditial/user.json';

  constructor(private http: HttpClient) {}

  // Makes a get request to the backend to fetch users data
  //   getUsers(): Observable<Login[]> {
  //     return this.http
  //       .get<Login[]>('./assets/creditial/user.json')
  //       .pipe(catchError(this.handleError));
  //   }

  //   private handleError(err: HttpErrorResponse) {
  //     console.error(err);
  //     return throwError(() => err.error() || 'Server error');
  //   }
  // }

  // getConfig() {
  //  this.users =  this.http.get<Login[]>(this.ConfigUrl);
  // }

  // getUsers(): any {
  //   const usersObservable = new Observable((observer) => {
  //     observer.next(this.users);
  //   });
  // }
  getUsers(): Observable<Login[]> {
    return this.http
      .get<Login[]>('http://localhost:3000/admin')
      .pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(() => err.error() || 'Server error');
  }
}
