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
    return this.http.get<Array<PictureModel>>('https://demirart-app.herokuapp.com/pictures/');
  }

  getPicture(_id: string): Observable<PictureModel> {
    return this.http.get<PictureModel>('https://demirart-app.herokuapp.com/pictures/' + _id);
  }
  
}
