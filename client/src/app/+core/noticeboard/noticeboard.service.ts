import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { Noticeboard } from 'src/app/+shared/models/noticeboard';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';
import { MessageService } from 'src/app/+shared/error-handler/message.service';

@Injectable({
  providedIn: 'root'
})
export class NoticeboardService {
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('NoticeboardService');
  }

  /** GET noticeboardes from the server */
  getNoticeboard(): Observable<Noticeboard[]> {
    return this.http.get<Noticeboard[]>(AppConfiguration.baseUrl + 'getAllNoticeboard')
      .pipe(
        catchError(this.handleError('getNoticeboard', []))
      );
  }
  /** POST: add a new noticeboard to the server */
  addNoticeboard(noticeboard: Noticeboard): Observable<Noticeboard> {
    return this.http.post<Noticeboard>(AppConfiguration.baseUrl + 'AddNoticeboard', noticeboard, this.httpOptions).pipe(
      tap((newNoticeboard: Noticeboard) => this.log(`added noticeboard w/ id=${newNoticeboard._id}`)),
      catchError(this.handleError<Noticeboard>('noticeboard'))
    );
  }
  /** PUT: update the noticeboard on the server */
  updateNoticeboard(noticeboard: Noticeboard): Observable<any> {
    const url = `${AppConfiguration.baseUrl + 'UpdateNoticeboard'}/${noticeboard._id}`;
    return this.http.put(url, noticeboard, this.httpOptions).pipe(
      tap(_ => this.log(`updated noticeboard id=${noticeboard._id}`)),
      catchError(this.handleError<any>('updateNoticeboard'))
    );
  }
  /** DELETE: delete the noticeboard from the server */
  deleteNoticeboard(noticeboard: Noticeboard | number): Observable<Noticeboard> {
    const id = typeof noticeboard === 'number' ? noticeboard : noticeboard._id;
    const url = `${AppConfiguration.baseUrl + 'DeleteNoticeboard'}/${id}`;

    return this.http.delete<Noticeboard>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted noticeboard id=${id}`)),
      catchError(this.handleError<Noticeboard>('deleteNoticeboard'))
    );
  }

  private log(message: string) {
    this.messageService.add(`NoticeboardService: ${message}`);
  }
}
