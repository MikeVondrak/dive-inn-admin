import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhotoSet, PhotoSetList, PhotoSetListEntry } from 'src/app/services/flickr/flickr.api.model';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

@Component({
  selector: 'app-photo-set-list',
  templateUrl: './photo-set-list.component.html',
  styleUrls: ['./photo-set-list.component.scss']
})
export class PhotoSetListComponent implements OnInit {

  @Output() albumIdSelect = new EventEmitter<string>();

  public photoSets$: Observable<PhotoSetListEntry[]> = this.flickr.getPhotoSets().pipe(map(photoSetList => photoSetList.photoset));

  public selectedSetId: string = '';

  constructor(private flickr: FlickrApiService) { 
    
  }

  ngOnInit(): void {
  }

  public albumSelect(album: PhotoSetListEntry) {
    this.albumIdSelect.emit(album.id);
    this.selectedSetId = album.id;
  }

}
