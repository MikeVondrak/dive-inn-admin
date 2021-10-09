import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, mergeMap, publishReplay, refCount, shareReplay, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PhotoSetPhoto } from 'src/app/services/flickr/flickr.api.model';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

@Component({
  selector: 'app-photo-set-preview',
  templateUrl: './photo-set-preview.component.html',
  styleUrls: ['./photo-set-preview.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoSetPreviewComponent implements OnInit, OnDestroy {

  @Input() photoSetId$: Observable<string> = of('');

  public photoIds$: Observable<PhotoSetPhoto[] | undefined> = of([]);
  public photoSetLoading$: Observable<boolean> = this.flickr.photoSetLoading$;
  public photoSetLoaded$: Observable<boolean> = this.flickr.photoSetLoaded$;

  //public photoSetPreview$: Observable<string[]> = of([]); // this.flickr.getPhotoSetPreviewThumbnailUrls('72157719812376042');

  public photoSetThumbnailUrls$: Observable<string[]> | undefined;

  public photoData: PhotoSetPhoto[] = [];
  public photoUrls: string[] = [];

  private destroy$: Subject<void> = new Subject();

  constructor(
    private cdr: ChangeDetectorRef,
    private flickr: FlickrApiService
  ) { }

  ngOnInit(): void {
    this.photoIds$ = this.photoSetId$.pipe(
      filter(set => !!set),
      switchMap(id => {
        if (!id) {
          debugger;
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

    this.photoSetThumbnailUrls$ = this.photoSetId$.pipe(
      filter(photoSetId => !!photoSetId),
      switchMap(photoSetId => {
        console.log('THUMBNAILS: ' + photoSetId);
        return this.flickr.getPhotoSetPreviewThumbnailUrls(photoSetId);
      })
    );

    // Need subscription active before template would subscribe due to ngIf
    this.photoIds$.pipe(takeUntil(this.destroy$)).subscribe(photoIds => {
      this.photoData = [...photoIds || []];
    });
    this.photoSetThumbnailUrls$.pipe(takeUntil(this.destroy$)).subscribe(urls => {
      this.photoUrls = [...urls || []];
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

