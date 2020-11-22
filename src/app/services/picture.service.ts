import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PictureModel } from '../models/picture-model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  getAllPictures(): Observable<Array<PictureModel>>{
    return this.http.get<Array<PictureModel>>('http://localhost:8080/pictures/');
  }

  getPicture(_id: string): Observable<PictureModel> {
    return this.http.get<PictureModel>('http://localhost:8080/pictures/' + _id);
  }
  
}
