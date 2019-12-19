import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/+shared/models/user';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';
import { MessageService } from 'src/app/+shared/error-handler/message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }
  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(AppConfiguration.baseUrl + 'getAllUser')
      .pipe(
        catchError(this.handleError('getUser', []))
      );
  }
  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(AppConfiguration.baseUrl + 'AddUser', user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser._id}`)),
      catchError(this.handleError<User>('user'))
    );
  }
  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    const url = `${AppConfiguration.baseUrl + 'UpdateUser'}/${user._id}`;
    return this.http.put(url, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user._id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }
  /** DELETE: delete the user from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user._id;
    const url = `${AppConfiguration.baseUrl + 'DeleteUser'}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

}
