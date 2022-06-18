import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.scss']
})
export class FindUsComponent implements OnInit {

  public mapCenter: google.maps.LatLngLiteral = {
    lat: 39.69160123918867, 
    lng: -104.98708204374248,
  };
  public mapOptions: google.maps.ImageMapTypeOptions = {};

  public mapMarkerPosition: google.maps.LatLngLiteral = this.mapCenter;
  public mapMarkerTitle = 'South Broadway and Arkansas Ave';
  public mapMarkerOptions = {}

  constructor() { }

  ngOnInit(): void {
  }

}
