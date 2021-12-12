import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { dataModifiedVar } from 'src/app/graphql.module';
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
  albums: Album[],
  modified: boolean,
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

  public photoSetChanged(photoSetId: string, location: AlbumByLocation) {
    localStorage.setItem('dataModified', 'true');
    dataModifiedVar(true);
    
    // convert PhotoSet into Album
    const newAlbum: Album = {
      flickr_photo_set_id: parseInt(photoSetId),
      title: '?????',
      description: '+++++++'
    };

    const mutationObject = gql`
      mutation SetLocationAlbum($location: AlbumByLocation!, $album: Album!) {
        setAlbum(location: $location, album: $album) {
          location
        }
      }
    `;

    console.log('APOLLO MUTATE ATTEMPT: ', {location}, {newAlbum});

    this.apolloService.mutate({ mutation: mutationObject, variables: { location, album: newAlbum }}).subscribe(
      (data) => { console.log('APOLLO MUTATE: ', {data}); },
      (err) => { console.error(err); }
    );

    // TODO - need mutation to update either album on AlbumByLocation or whole AlbumByLocation?

    // can't modify location since it's coming from an observable(?)
    // location.modified = true;
    // if (location.albums.length > 0) {
    //   location.albums = [];
    // }
    // location.albums.push(newAlbum);
    
  }
}
