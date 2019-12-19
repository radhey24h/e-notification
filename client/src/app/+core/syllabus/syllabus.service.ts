import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { Syllabus } from 'src/app/+shared/models/syllabus';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';
import { MessageService } from 'src/app/+shared/error-handler/message.service';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('SyllabusService');
  }
  /** GET syllabuses from the server */
  getSyllabus(): Observable<Syllabus[]> {
    return this.http.get<Syllabus[]>(AppConfiguration.baseUrl + 'getAllSyllabus')
      .pipe(
        catchError(this.handleError('getSyllabus', []))
      );
  }
  /** POST: add a new syllabus to the server */
  addSyllabus(syllabus: Syllabus): Observable<Syllabus> {
    return this.http.post<Syllabus>(AppConfiguration.baseUrl + 'AddSyllabus', syllabus, this.httpOptions).pipe(
      tap((newSyllabus: Syllabus) => this.log(`added syllabus w/ id=${newSyllabus._id}`)),
      catchError(this.handleError<Syllabus>('syllabus'))
    );
  }
  /** PUT: update the syllabus on the server */
  updateSyllabus(syllabus: Syllabus): Observable<any> {
    const url = `${AppConfiguration.baseUrl + 'UpdateSyllabus'}/${syllabus._id}`;
    return this.http.put(url, syllabus, this.httpOptions).pipe(
      tap(_ => this.log(`updated syllabus id=${syllabus._id}`)),
      catchError(this.handleError<any>('updateSyllabus'))
    );
  }
  /** DELETE: delete the syllabus from the server */
  deleteSyllabus(syllabus: Syllabus | number): Observable<Syllabus> {
    const id = typeof syllabus === 'number' ? syllabus : syllabus._id;
    const url = `${AppConfiguration.baseUrl + 'DeleteSyllabus'}/${id}`;

    return this.http.delete<Syllabus>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted syllabus id=${id}`)),
      catchError(this.handleError<Syllabus>('deleteSyllabus'))
    );
  }

  private log(message: string) {
    this.messageService.add(`SyllabusService: ${message}`);
  }
}
