import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  age: string = this.calculateAge().toString().concat(this.calculateAge() % 10 == 1 ? " godinu" : " godina");

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge() :number{
    return Math.floor((<number><unknown>new Date() - <number><unknown>new Date(1987, 1, 26))/31536000000);
  }

}
