import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  public getPhotoIDs() {
    let url = this.urlRoot + 'photosets.getPhotos' + this.apiKey + this.userId + '&photoset_id=' + this.albumId + this.apiArgs;
    let photosetList = this.http.get<any>(url);
    // photosetList.subscribe(list => {
    //   console.log('photoID: ' + list.photoset.photo[0].id);
    // })
    return photosetList;
  }

  public getPhotoSets() {
    let url = this.urlRoot + 'photosets.getList' + this.apiKey + this.userId + this.apiArgs;
    let photosetList = this.http.get<any>(url);
    // photosetList.subscribe(list => {
    //   console.log('title: ' + list.photosets.photoset[0].title._content);
    // })
    return photosetList;
  }

}
