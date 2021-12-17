import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { dataModifiedVar } from 'src/app/graphql.module';
import { PhotoSetListEntry } from 'src/app/services/flickr/flickr.api.model';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

export type Album = {
  id: string,
  flickr_photo_set_id: string,
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
            id
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

    const locationAlbum = location.albums?.[0];
    // get flickr PhotoSet via ID
    
    this.photoSets$.pipe(map(photoSetListEntries => {
      return photoSetListEntries.find(entry => entry.id === photoSetId)
    })).subscribe(flickrPhotoSet => {
      // convert PhotoSet into Album
      const newAlbum: Album = {
        id: locationAlbum?.id,
        flickr_photo_set_id: photoSetId,
        title: flickrPhotoSet?.title?._content || 'No Flickr Data',
        description: flickrPhotoSet?.description?._content || 'No Flickr Data',
      };

      const mutationObject = gql`
        mutation SetLocationAlbum($albumId: Int!, $locationId: Int!) {
          update_album_by_pk(pk_columns: {id: $albumId}, _set: {album_location_id: $locationId}) {
            id
            flickr_photo_set_id
          }
        }
      `;

      console.log('APOLLO MUTATE ATTEMPT: ', {location}, {newAlbum});

      this.apolloService.mutate({ mutation: mutationObject, variables: { locationId: location.id, albumId: newAlbum.flickr_photo_set_id }}).subscribe(
        (data) => { 
          console.log('APOLLO MUTATE: ', {data});
          
        },
        (err) => { console.error(err); }
      );
    });
    
    

    // TODO - need mutation to update either album on AlbumByLocation or whole AlbumByLocation?

    // can't modify location since it's coming from an observable(?)
    // location.modified = true;
    // if (location.albums.length > 0) {
    //   location.albums = [];
    // }
    // location.albums.push(newAlbum);
    
  }
}
