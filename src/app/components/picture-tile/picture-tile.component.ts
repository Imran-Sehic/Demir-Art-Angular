import { Component, OnInit, Input } from '@angular/core';
import { PictureModel } from '../../models/picture-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-picture-tile',
  templateUrl: './picture-tile.component.html',
  styleUrls: ['./picture-tile.component.css']
})
export class PictureTileComponent implements OnInit {

  @Input() pictures: PictureModel[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPicture(id: number): void {
    this.router.navigateByUrl('/pictures/' + id);
  }

}
