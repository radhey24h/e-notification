import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { Examination } from 'src/app/+shared/models/examination';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';
import { MessageService } from 'src/app/+shared/error-handler/message.service';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('ExaminationService');
  }

  /** GET examinationes from the server */
  getExamination(): Observable<Examination[]> {
    return this.http.get<Examination[]>(AppConfiguration.baseUrl + 'getAllExamination')
      .pipe(
        catchError(this.handleError('getExamination', []))
      );
  }

  /** POST: add a new examination to the server */
  addExamination(examination: Examination): Observable<Examination> {
    return this.http.post<Examination>(AppConfiguration.baseUrl + 'AddExamination', examination, this.httpOptions).pipe(
      tap((newExamination: Examination) => this.log(`added examination w/ id=${newExamination._id}`)),
      catchError(this.handleError<Examination>('examination'))
    );
  }
  /** PUT: update the examination on the server */
  updateExamination(examination: Examination): Observable<any> {
    const url = `${AppConfiguration.baseUrl + 'UpdateExamination'}/${examination._id}`;
    return this.http.put(url, examination, this.httpOptions).pipe(
      tap(_ => this.log(`updated examination id=${examination._id}`)),
      catchError(this.handleError<any>('updateExamination'))
    );
  }
  /** DELETE: delete the examination from the server */
  deleteExamination(examination: Examination | number): Observable<Examination> {
    const id = typeof examination === 'number' ? examination : examination._id;
    const url = `${AppConfiguration.baseUrl + 'DeleteExamination'}/${id}`;

    return this.http.delete<Examination>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted examination id=${id}`)),
      catchError(this.handleError<Examination>('deleteExamination'))
    );
  }

  private log(message: string) {
    this.messageService.add(`ExaminationService: ${message}`);
  }
}
