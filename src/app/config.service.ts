import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class ConfigService {
  constructor(private http: HttpClient) { 

  }
  configUrl = 'http://localhost:3000/services';

  getNames(): Observable<any[]> {
    return this.http.get<any[]>(this.configUrl);
  }

}

