import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { dataModifiedVar } from 'src/app/graphql.module';
import { PhotoSetListEntry } from 'src/app/services/flickr/flickr.api.model';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';
import { GetAlbumsByLocationGQL } from '../../../../../../../../generated/graphql/graphql';

export type Album = {
  id?: number,
  album_location_id: number,
  flickr_photo_set_id: string,
  title: string,
  description: string,
  flickr_photo_set_id_num: number,
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

    //const query: GetAlbumsByLocationGQL = new GetAlbumsByLocationGQL();

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

    //debugger;
    const locationAlbum = location.albums?.[0];
    // get flickr PhotoSet via ID
    
    this.photoSets$.pipe(map(photoSetListEntries => {
      return photoSetListEntries.find(entry => entry.id === photoSetId)
    })).subscribe(flickrPhotoSet => {

      // convert PhotoSet into Album
      const newAlbum: Album = {
        id: locationAlbum?.id,
        album_location_id: location.id || -1,
        flickr_photo_set_id: photoSetId,
        flickr_photo_set_id_num: 0,
        title: flickrPhotoSet?.title?._content || 'No Flickr Data',
        description: flickrPhotoSet?.description?._content || 'No Flickr Data',
      };

      // const mutationObject = gql`
      //   mutation SetLocationAlbum($albumId: Int!, $flickrPhotoSetId: String!) {
      //     update_album_by_pk(pk_columns: {id: $albumId}, _set: {flickr_photo_set_id: $flickrPhotoSetId}) {
      //       id
      //       flickr_photo_set_id
      //       album_location_id
      //     }
      //   }
      // `;
      const input = {}; // &#R%&*$R%*@#$*(&@&*$@$&*@$*&@*$&*)

      const mutationObject = gql`
        mutation SetLocationAlbum($input: album_insert_input!) {
          insert_album_one(object: $input, on_conflict: { constraint: album_pkey, update_columns: [title, description, flickr_photo_set_id] }) {
            id
            flickr_photo_set_id
            album_location_id
          }
        }
      `;

      console.log('APOLLO MUTATE ATTEMPT: ', {location}, {newAlbum});

      this.apolloService.mutate({ mutation: mutationObject, variables: { input: newAlbum }}).subscribe(
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
