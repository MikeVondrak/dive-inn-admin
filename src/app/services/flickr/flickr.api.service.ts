import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, forkJoin, observable, Observable, of, Subject } from 'rxjs';
import { filter, flatMap, map, mergeMap, publishReplay, refCount, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { PhotoSet, PhotoSetList, PhotoSetListEntry, PhotoSize, PhotoSizes } from './flickr.api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlickrApiService {

  private readonly urlRoot: string = 'https://api.flickr.com/services/rest/?method=flickr.';

  private urlApiType: string = ''; // NEED TO TYPE/ENUM: photosets, photos

  private urlApiId: string = ''; // NEED TO TYPE/ENUM - photosets: getList, getPhotos; photos: getSizes 

  private readonly apiKey: string = `&api_key=${environment.flickrConfig.key}`;
  private readonly userId: string = `&user_id=${environment.flickrConfig.user}`;
  private readonly apiArgs: string = '&format=json&nojsoncallback=1';

  private readonly albumId: string = '72157719812376042';

  // caching
  private photoSetList: Observable<PhotoSetList> | null = null;
  public photoSets: { id: string, set$: Observable<PhotoSet> }[] = []; // TODO: make a proper type for this
  public photoSizes: Map<string, PhotoSizes> = new Map<string, PhotoSizes>(); // PhotoSizes[] = [];

  public photoSetLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public photoSetLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public getPhotoSet(id: string): Observable<PhotoSet | undefined> {
    let url = this.urlRoot + 'photosets.getPhotos' + this.apiKey + this.userId + '&photoset_id=' + id + this.apiArgs;
    
    const set = this.photoSets.find(set => set.id === id);
    if (!!set) {
      console.log('CACHED PHOTOSET');
      return set.set$;
    }
    console.log('LOADING PHOTOSET');
    this.photoSetLoaded$.next(false);
    this.photoSetLoading$.next(true);
    const ret$ = this.http.get<{ photoset: PhotoSet}>(url).pipe(
      publishReplay(1),
      refCount(),
      tap(() => { this.photoSetLoading$.next(false); this.photoSetLoaded$.next(true); }),
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

  public getPhotoThumbnailUrl(photoId: string): Observable<string> {
    const joiner = '&';
    const thumbnailString = 'Thumbnail';
    let url = this.urlRoot + 'photos.getSizes' + this.apiKey + joiner + 'photo_id=' + photoId + this.apiArgs;
    
    if (this.photoSizes.has(photoId)) {
      console.log('CACHED PHOTO SIZE: ' + photoId);
      const sizes = this.photoSizes.get(photoId);
      return of(sizes?.size?.find(s => s.label === thumbnailString)?.source || '');
    }

    return this.http.get<{ sizes: PhotoSizes }>(url).pipe(
      map(val => {
        this.photoSizes.set(photoId, val.sizes);
        return val.sizes?.size?.find(size => size.label === thumbnailString)?.source || '';
      })
    );
  }

  public getPhotoSetPreviewThumbnailUrls(photoSetId: string): Observable<string[]> {
    const numberOfThumbs = 5;
    const photoSetPhoto$ = this.getPhotoSet(photoSetId).pipe(
      filter(photoSet => !!photoSet),
      map(photoSet => {
        return photoSet?.photo.slice(0, 5) || [];
      }));
    const photoSetPhotoIds$ = photoSetPhoto$.pipe(map(photoSetPhoto => photoSetPhoto.map(photo => photo.id)));
    
    const a: Observable<string>[] = [];
    const photoSetPhotoUrls$: Observable<string[]> = photoSetPhotoIds$.pipe(
      flatMap(idArray => {
        idArray.forEach(id => {
          const thumbUrl = this.getPhotoThumbnailUrl(id);
          a.push(thumbUrl);
        });
        const fj: Observable<string[]> = forkJoin(a);
        this.photoSetLoaded$.next(true);
        this.photoSetLoading$.next(false);
        return fj;
      })
    );
    this.photoSetLoaded$.next(false);
    this.photoSetLoading$.next(true);
    return photoSetPhotoUrls$;
  }

}
