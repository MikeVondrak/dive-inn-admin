import { Observable, of } from "rxjs";
import { PhotoSet, PhotoSetList, PhotoSetListEntry } from "./flickr.api.model";
//import { AlbumByLocation } from '../../features/albums/components/album-assigner/album-assigner.component';
//import { HttpClient } from '@angular/common/http';

const photoSetListEntries: PhotoSetListEntry[] = [
  {
    id: 'id1',
    date_create: 0,
    description: { _content: 'PhotoSetListEntry 1 Description' },
    photos: 10,
    title: { _content: 'PhotoSetListEntry 1' },
  }
];

const photoSetList: PhotoSetList = {
  page: 1,
  perpage: 10,
  pages: 20,
  photoset: photoSetListEntries,
  total: 201,
};

export class FlickrApiServiceMock {
  public getPhotoSets(id: string): Observable<PhotoSetList> { return of(photoSetList); }
}


// const mockAlbumsByLocation: AlbumByLocation = {
//   albums: [],
//   description: 'Test Description 1',
//   id: 1,
//   modified: false,
//   name: 'Test Album By Location 1'
// }