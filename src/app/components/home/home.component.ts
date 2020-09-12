import { Component, OnInit } from '@angular/core';
import { PictureModel } from '../../models/picture-model';
import { PictureService } from '../../services/picture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pictures: Array<PictureModel> = [];
  areThereImages: string;

  constructor(private pictureService: PictureService) {
    this.areThereImages = 'loading';
    this.pictureService.getAllPictures().subscribe(picture => {
      if (picture.length != 0) {
        this.areThereImages = 'yes';
        this.pictures = picture;
      }else if(picture.length === 0){
        this.areThereImages = 'no';
      }
    });
  }

  ngOnInit(): void {
  }

}
