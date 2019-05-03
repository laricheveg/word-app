import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserWordFrequencyService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8', 'tokenid': localStorage['tokenid'] });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  updateFrequency(data): Observable<any> {
    return this.http.post('/api/user/word', JSON.stringify(data), this.options).pipe(map(res => res.json()));
  }

  getFrequency(data): Observable<any> {
    return this.http.get(`/api/user/word/`, this.options).pipe(map(res => res.json()));
  }

  removeAllFrequency(): Observable<any> {
    return this.http.delete(`/api/user/word/`, this.options).pipe(map(res => res.json()));
  }
  
}
