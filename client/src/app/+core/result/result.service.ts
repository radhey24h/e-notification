import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { Result } from 'src/app/+shared/models/result';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';
import { MessageService } from 'src/app/+shared/error-handler/message.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('ResultService');
  }
  /** GET noticeboardes from the server */
  getResult(): Observable<Result[]> {
    return this.http.get<Result[]>(AppConfiguration.baseUrl + 'getAllResult')
      .pipe(
        catchError(this.handleError('getResult', []))
      );
  }
  /** POST: add a new noticeboard to the server */
  addResult(noticeboard: Result): Observable<Result> {
    return this.http.post<Result>(AppConfiguration.baseUrl + 'AddResult', noticeboard, this.httpOptions).pipe(
      tap((newResult: Result) => this.log(`added noticeboard w/ id=${newResult._id}`)),
      catchError(this.handleError<Result>('noticeboard'))
    );
  }
  /** PUT: update the noticeboard on the server */
  updateResult(noticeboard: Result): Observable<any> {
    const url = `${AppConfiguration.baseUrl + 'UpdateResult'}/${noticeboard._id}`;
    return this.http.put(url, noticeboard, this.httpOptions).pipe(
      tap(_ => this.log(`updated noticeboard id=${noticeboard._id}`)),
      catchError(this.handleError<any>('updateResult'))
    );
  }
  /** DELETE: delete the noticeboard from the server */
  deleteResult(noticeboard: Result | number): Observable<Result> {
    const id = typeof noticeboard === 'number' ? noticeboard : noticeboard._id;
    const url = `${AppConfiguration.baseUrl + 'DeleteResult'}/${id}`;

    return this.http.delete<Result>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted noticeboard id=${id}`)),
      catchError(this.handleError<Result>('deleteResult'))
    );
  }

  private log(message: string) {
    this.messageService.add(`ResultService: ${message}`);
  }
}
