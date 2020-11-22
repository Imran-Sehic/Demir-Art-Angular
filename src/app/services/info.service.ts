import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendInfoPayload } from '../components/picture/info.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  sendInfo(infoPayload: SendInfoPayload): Observable<any> {
    return this.http.post('http://localhost:8080/info/', infoPayload);
  }

}
