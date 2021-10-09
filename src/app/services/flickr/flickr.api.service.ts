import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  constructor(private http: HttpClient) { }

  public getPhotoIDs(id: string): Observable<any[]> {
    let url = this.urlRoot + 'photosets.getPhotos' + this.apiKey + this.userId + '&photoset_id=' + id + this.apiArgs;
    let photoList = this.http.get<any>(url);
  
    return photoList.pipe(map(photos => photos.photoset?.photo));
  }

  public getPhotoSets() {
    let url = this.urlRoot + 'photosets.getList' + this.apiKey + this.userId + this.apiArgs;
    let photosetList = this.http.get<any>(url);

    return photosetList;
  }

}
