import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { error } from 'console';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log(`Request to ${request.urlWithParams}`);
        if(error.status==404){
           console.log("not found Error");
        } else if(error.status==401){
          console.log("unauthorized access");
        } else if(error.status==500){
          console.log("server error");
        }
        return throwError(error);        
      })
    );
  }
}
