import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, of, Subject } from 'rxjs';
import { filter, map, publishReplay, refCount, shareReplay, take, tap } from 'rxjs/operators';
import { PhotoSet, PhotoSetList, PhotoSetListEntry, PhotoSize, PhotoSizes } from './flickr.api.model';

@Injectable({
  providedIn: 'root'
})
export class FlickrApiService {

  private readonly urlRoot: string = 'https://api.flickr.com/services/rest/?method=flickr.';

  private urlApiType: string = ''; // NEED TO TYPE/ENUM: photosets, photos

  private urlApiId: string = ''; // NEED TO TYPE/ENUM - photosets: getList, getPhotos; photos: getSizes 

  private readonly apiKey: string = '&api_key=306d51374865d4e6fa4b32b0fd5a7998'; // NEED TO GET FROM ENV
  private readonly userId: string = '&user_id=193893336@N02';
  private readonly apiArgs: string = '&format=json&nojsoncallback=1';

  private readonly albumId: string = '72157719812376042';

  // caching
  private photoSetList: Observable<PhotoSetList> | null = null;
  public photoSets: { id: string, set$: Observable<PhotoSet> }[] = []; // TODO: make a proper type for this
  public photoSizes: PhotoSize[] = [];

  public photoSetLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public photoSetLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public getPhotoSet(id: string): Observable<PhotoSet | undefined> {
    let url = this.urlRoot + 'photosets.getPhotos' + this.apiKey + this.userId + '&photoset_id=' + id + this.apiArgs;
    
    const set = this.photoSets.find(set => set.id === id);
    if (!!set) {
      return set.set$;
    }

    this.photoSetLoaded$.next(false);
    this.photoSetLoading$.next(true);
    const ret$ = this.http.get<{ photoset: PhotoSet}>(url).pipe(
      publishReplay(1),
      refCount(),
      tap(() => { debugger; this.photoSetLoading$.next(false); this.photoSetLoaded$.next(true); }),
      map(obj => obj.photoset)
    );

    this.photoSets.push({ id: id, set$: ret$ });

    return ret$;
  }

  public getPhotoSets(): Observable<PhotoSetList> {
    let url = this.urlRoot + 'photosets.getList' + this.apiKey + this.userId + this.apiArgs;
    
    if (!this.photoSetList) {
      let photosetList = this.http.get<{ photosets: PhotoSetList }>(url).pipe(
        publishReplay(1),
        refCount(),
        map(returnVal => returnVal.photosets)
      );
      this.photoSetList = photosetList;
    }
    
    return this.photoSetList;
  }

  public getPhotoSizes(photoId: string): Observable<PhotoSizes> {
    const joiner = '&';
    let url = this.urlRoot + 'photos.getSizes' + this.apiKey + joiner + photoId + this.apiArgs;
    //let sizesList: PhotoSize[] = [];
    return this.http.get<{ sizes: PhotoSizes }>(url).pipe(
      tap(val => {
        val.sizes.size.forEach(element => {
          this.photoSizes.push(element);
        });
      }),
      map(val => {
        return val.sizes;
      })
    );
  }

}
