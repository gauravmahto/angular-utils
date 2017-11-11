import {
  HttpErrorResponse, HttpEvent,
  HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone();

    return next.handle(request)
      .do((response: any) => {

        if (response instanceof HttpResponse) {

          console.log('res');

        }

      }, (err: any) => {

        if (err instanceof HttpErrorResponse) {

          console.log('err');

        }

    });

  }

}