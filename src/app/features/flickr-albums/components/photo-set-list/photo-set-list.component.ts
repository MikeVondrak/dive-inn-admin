import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

@Component({
  selector: 'app-photo-set-list',
  templateUrl: './photo-set-list.component.html',
  styleUrls: ['./photo-set-list.component.scss']
})
export class PhotoSetListComponent implements OnInit {

  @Output() albumIdSelect = new EventEmitter<string>();

  public photoSets$: Observable<any> = this.flickr.getPhotoSets().pipe(map(photoSet => photoSet.photosets.photoset));

  constructor(private flickr: FlickrApiService) { 
    
  }

  ngOnInit(): void {
  }

  public albumSelect(album: any) {
    this.albumIdSelect.emit(album.id);
  }
}
