import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';

@Component({
  selector: 'app-photo-set-preview',
  templateUrl: './photo-set-preview.component.html',
  styleUrls: ['./photo-set-preview.component.scss'],
  
})
export class PhotoSetPreviewComponent implements OnInit, OnChanges {

  @Input() photoSetId: string = '';
  @Input() photoSetId$: Observable<string> = of('');

  public photoIds$: Observable<any[]> = of([]);

  public photoIdsStatic$: Observable<any> = this.flickr.getPhotoIDs(this.photoSetId);

  constructor(private flickr: FlickrApiService) { }

  ngOnInit(): void {
    this.photoIds$ = this.photoSetId$.pipe(
      filter(set => !!set),
      switchMap(id => {
        if (!id) {
          return of([]);
        }
        return this.flickr.getPhotoIDs(id).pipe(
          filter(photoSet => !!photoSet),
          map(photoSet => {
            return photoSet?.slice(0, 5);
          })
        );
      }
    ));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photoSetId) {
      this.photoIdsStatic$ = this.flickr.getPhotoIDs(changes.photoSetId.currentValue);
    }
    if (changes.photoSetId$) {
      console.log('PHOTO SET ID$ CHANGED');
    }
  }

}
