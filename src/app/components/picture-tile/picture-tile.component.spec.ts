import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureTileComponent } from './picture-tile.component';

describe('PictureTileComponent', () => {
  let component: PictureTileComponent;
  let fixture: ComponentFixture<PictureTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
