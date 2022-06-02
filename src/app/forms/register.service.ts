import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ElementRef, ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable, observable, throwError } from 'rxjs';
import { View } from './view/viewforms/view';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: any = 'http://localhost:3000/users';

  results: View[] = [];
  constructor(private http: HttpClient) {}

  insertData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

  // viewData() {
  //   return this.http.get(this.url);
  // }

  viewData(): Observable<View[]> {
    return this.http
      .get<View[]>('http://localhost:3000/users')
      .pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(() => err.error() || 'Server error');
  }

  getIdData(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateIdData(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteIdData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
