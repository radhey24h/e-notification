import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { State } from 'src/app/+shared/models/state';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';
import { MessageService } from 'src/app/+shared/error-handler/message.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('StateService');
  }
  /** GET noticeboardes from the server */
  getState(): Observable<State[]> {
    return this.http.get<State[]>(AppConfiguration.baseUrl + 'getAllState')
      .pipe(
        catchError(this.handleError('getState', []))
      );
  }
  /** POST: add a new noticeboard to the server */
  addState(noticeboard: State): Observable<State> {
    return this.http.post<State>(AppConfiguration.baseUrl + 'AddState', noticeboard, this.httpOptions).pipe(
      tap((newState: State) => this.log(`added noticeboard w/ id=${newState._id}`)),
      catchError(this.handleError<State>('noticeboard'))
    );
  }
  /** PUT: update the noticeboard on the server */
  updateState(noticeboard: State): Observable<any> {
    const url = `${AppConfiguration.baseUrl + 'UpdateState'}/${noticeboard._id}`;
    return this.http.put(url, noticeboard, this.httpOptions).pipe(
      tap(_ => this.log(`updated noticeboard id=${noticeboard._id}`)),
      catchError(this.handleError<any>('updateState'))
    );
  }
  /** DELETE: delete the noticeboard from the server */
  deleteState(noticeboard: State | number): Observable<State> {
    const id = typeof noticeboard === 'number' ? noticeboard : noticeboard._id;
    const url = `${AppConfiguration.baseUrl + 'DeleteState'}/${id}`;

    return this.http.delete<State>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted noticeboard id=${id}`)),
      catchError(this.handleError<State>('deleteState'))
    );
  }

  private log(message: string) {
    this.messageService.add(`StateService: ${message}`);
  }
}
