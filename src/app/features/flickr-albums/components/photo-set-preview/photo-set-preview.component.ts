import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

@Component({
  selector: 'app-photo-set-preview',
  templateUrl: './photo-set-preview.component.html',
  styleUrls: ['./photo-set-preview.component.scss'],
  
})
export class PhotoSetPreviewComponent implements OnInit {

  @Input() photoSetId$: Observable<string> = of('');

  public photoIds$: Observable<any[] | undefined> = of([]);
  public photoSetLoading$: Observable<boolean> = this.flickr.photoSetLoading$;
  public photoSetLoaded$: Observable<boolean> = this.flickr.photoSetLoaded$;

  constructor(private flickr: FlickrApiService) { }

  ngOnInit(): void {
    this.photoIds$ = this.photoSetId$.pipe(
      filter(set => !!set),
      switchMap(id => {
        debugger;
        if (!id) {
          return of([]);
        }
        return this.flickr.getPhotoSet(id).pipe(
          filter(photoSet => !!photoSet),
          map(photoSet => {
            return photoSet?.photo.slice(0, 5);
          })
        );
      }
    ));
  }

}
