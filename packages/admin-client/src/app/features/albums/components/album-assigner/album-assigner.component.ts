import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhotoSetListEntry } from 'src/app/services/flickr/flickr.api.model';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

export type Album = {
  flickr_photo_set_id: number,
  title: string,
  description: string,
}

export type AlbumByLocation = {
  id: number,
  name: string,
  description: string,
  albums: Album[]
}

export type AlbumByLocationResponse = {
  album_location: AlbumByLocation[],
}
export type AlbumByLocationVariables = {};

@Component({
  selector: 'app-album-assigner',
  templateUrl: './album-assigner.component.html',
  styleUrls: ['./album-assigner.component.scss']
})
export class AlbumAssignerComponent implements OnInit {

  private queryRef: QueryRef<AlbumByLocationResponse, AlbumByLocationVariables>;

  public locationList$: Observable<AlbumByLocation[]>;
  public photoSets$: Observable<PhotoSetListEntry[]> = this.flickrService.getPhotoSets().pipe(map(photoSetList => photoSetList.photoset));

  //public model = "72157719812376050";

  constructor(
    private apolloService: Apollo,
    private flickrService: FlickrApiService,
  ) { 
    const queryObject = gql`
      query GetAlbums {
        album_location {
          __typename
          id
          name
          description
          albums {
            __typename
            flickr_photo_set_id
            title
            description
          }
          modified @client
        }
      }
    `;

    this.queryRef = this.apolloService.watchQuery<AlbumByLocationResponse, AlbumByLocationVariables>({
      query: queryObject,
      variables: {}
    });

    this.locationList$ = this.queryRef.valueChanges.pipe(map(respose => respose.data.album_location));
    this.queryRef.valueChanges.subscribe(value => console.log('APOLLO: ', {value}));
  }

  ngOnInit(): void {
  }

}
