import { Component, OnInit } from '@angular/core';
import { SendInfoPayload } from './info.payload';
import { PictureService } from '../../services/picture.service';
import { InfoService } from '../../services/info.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { PictureModel } from 'src/app/models/picture-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  pictureId: string;
  picture: PictureModel;
  pictureLoaded: boolean = false;
  infoPayload: SendInfoPayload;
  createInfoForm: FormGroup;
  submitted: string;

  constructor(private infoService: InfoService, private pictureService: PictureService, private activateRoute: ActivatedRoute, private router: Router) {
    this.pictureId = this.activateRoute.snapshot.params._id;

    this.infoPayload = {
      name: '',
      lastname: '',
      cellphone: null,
      image_url: ''
    }
  }

  ngOnInit(): void {
    this.createInfoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      cellphone: new FormControl(null, Validators.required),
    });
    this.getPictureById();
  }

  private getPictureById() {
    this.pictureService.getPicture(this.pictureId).subscribe(data => {
      this.picture = data;
      this.pictureLoaded = true;
    }, error => {
      throwError(error);
    });
  }

  private returnToHome() {
    this.router.navigateByUrl('pictures');
  }

  sendInfo() {
    this.infoPayload.name = this.createInfoForm.get('name').value;
    this.infoPayload.lastname = this.createInfoForm.get('lastname').value;
    this.infoPayload.cellphone = this.createInfoForm.get('cellphone').value;
    this.infoPayload.image_url = this.picture.image_url;

    if (this.createInfoForm.get('name').valid && this.createInfoForm.get('lastname').valid
      && this.createInfoForm.get('cellphone').valid) {

        this.submitted = "wait";

      this.infoService.sendInfo(this.infoPayload).subscribe(() => {
        this.submitted = "yes";
      }, error => {
        throwError(error);
      });

    } else {
      this.submitted = "no";
    }
  }

}
