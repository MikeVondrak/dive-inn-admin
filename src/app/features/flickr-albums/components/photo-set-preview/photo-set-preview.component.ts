import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

@Component({
  selector: 'app-photo-set-preview',
  templateUrl: './photo-set-preview.component.html',
  styleUrls: ['./photo-set-preview.component.scss']
})
export class PhotoSetPreviewComponent implements OnInit {

  public photoIds$ = this.flickr.getPhotoIDs().pipe(map(ps => ps.photoset.photo.slice(0, 5)));

  constructor(private flickr: FlickrApiService) { }

  ngOnInit(): void {
  }

}
