import { Component, OnInit } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-flickr-albums',
  templateUrl: './flickr-albums.component.html',
  styleUrls: ['./flickr-albums.component.scss']
})
export class FlickrAlbumsComponent implements OnInit {

  public selectedPhotoSetId$: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  albumSelect(id: string) {
    console.log("output: " + id);
    this.selectedPhotoSetId$.next(id);
  }

}
