import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  host = 'https://alerio-production.up.railway.app';

  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http.get(`${this.host}/sensors`).pipe(map((res) => res));
  }
}
