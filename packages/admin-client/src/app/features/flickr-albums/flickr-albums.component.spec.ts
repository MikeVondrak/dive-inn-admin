import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrAlbumsComponent } from './flickr-albums.component';

describe('FlickrAlbumsComponent', () => {
  let component: FlickrAlbumsComponent;
  let fixture: ComponentFixture<FlickrAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickrAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
