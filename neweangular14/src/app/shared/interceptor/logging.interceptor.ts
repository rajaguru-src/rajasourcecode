import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    return next.handle(request).pipe(
      tap(event=>{
        if(event.type == HttpEventType.Response){
          const estimate = Date.now() - startTime;
          console.log(`Request to ${request.urlWithParams} took ${estimate}ms and returned status`);
        }
      }   

      )
    )
  }
}
