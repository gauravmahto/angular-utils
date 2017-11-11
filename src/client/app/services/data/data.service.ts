import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  public constructor(private http: HttpClient) {
  }

  public getData(): Observable<any> {

    return this.http.get('/data');

  }

}