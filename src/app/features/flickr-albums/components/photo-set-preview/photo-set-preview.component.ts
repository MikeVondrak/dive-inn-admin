import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, mergeMap, publishReplay, refCount, shareReplay, switchMap, tap } from 'rxjs/operators';
import { PhotoSetPhoto } from 'src/app/services/flickr/flickr.api.model';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

@Component({
  selector: 'app-photo-set-preview',
  templateUrl: './photo-set-preview.component.html',
  styleUrls: ['./photo-set-preview.component.scss'],
  
})
export class PhotoSetPreviewComponent implements OnInit {

  @Input() photoSetId$: Observable<string> = of('');

  public photoIds$: Observable<PhotoSetPhoto[] | undefined> = of([]);
  public photoSetLoading$: Observable<boolean> = this.flickr.photoSetLoading$;
  public photoSetLoaded$: Observable<boolean> = this.flickr.photoSetLoaded$;

  public photoData: PhotoSetPhoto[] = [];

  constructor(private flickr: FlickrApiService) { }

  ngOnInit(): void {
    this.photoIds$ = this.photoSetId$.pipe(
      filter(set => !!set),
      switchMap(id => {
        if (!id) {
          return of([]);
        }
        return this.flickr.getPhotoSet(id).pipe(
          filter(photoSet => !!photoSet),
          map(photoSet => {
            return photoSet?.photo.slice(0, 5);
          }),
        );
      })
    );

    // TODO: manage this subscription (unsubscribe on destroy)
    // Need subscription active before template would subscribe due to ngIf
    this.photoIds$.subscribe(photoIds => {
      this.photoData = [...photoIds || []];
    }
      
    )
  }

}
