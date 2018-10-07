import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AgendaService {
  constructor(private http: HttpClient) {}

  getPeoples(): Observable<any> {
    return this.http.get('assets/people.json');
  }
}
