import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { University } from 'src/app/+shared/models/university';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';
import { MessageService } from 'src/app/+shared/error-handler/message.service';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler,
    private messageService: MessageService) {
    this.handleError = httpErrorHandler.createHandleError('UniversityService');
  }
  /** GET syllabuses from the server */
   getUniversity(): Observable<University[]> {
    return this.http.get<University[]>(AppConfiguration.baseUrl + 'getAllUniversity')
      .pipe(
        catchError(this.handleError('getUniversity', []))
      );
  }
  /** POST: add a new syllabus to the server */
  addUniversity(syllabus: University): Observable<University> {
    return this.http.post<University>(AppConfiguration.baseUrl + 'AddUniversity', syllabus, this.httpOptions).pipe(
      tap((newUniversity: University) => this.log(`added syllabus w/ id=${newUniversity._id}`)),
      catchError(this.handleError<University>('syllabus'))
    );
  }
  /** PUT: update the syllabus on the server */
  updateUniversity(syllabus: University): Observable<any> {
    const url = `${AppConfiguration.baseUrl + 'UpdateUniversity'}/${syllabus._id}`;
    return this.http.put(url, syllabus, this.httpOptions).pipe(
      tap(_ => this.log(`updated syllabus id=${syllabus._id}`)),
      catchError(this.handleError<any>('updateUniversity'))
    );
  }
  /** DELETE: delete the syllabus from the server */
  deleteUniversity(syllabus: University | number): Observable<University> {
    const id = typeof syllabus === 'number' ? syllabus : syllabus._id;
    const url = `${AppConfiguration.baseUrl + 'DeleteUniversity'}/${id}`;

    return this.http.delete<University>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted syllabus id=${id}`)),
      catchError(this.handleError<University>('deleteUniversity'))
    );
  }

  private log(message: string) {
    this.messageService.add(`UniversityService: ${message}`);
  }
}
