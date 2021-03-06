import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyhallService {

  constructor(private http: HttpClient) { }

  getMyhalls(): Observable<any> {
    return this.http.get('http://localhost:8057/api/owner/?ownerId=5eef7c90d289f53eca109794');
  }
}
