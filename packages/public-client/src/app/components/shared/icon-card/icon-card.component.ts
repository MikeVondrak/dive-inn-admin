import { Component, Input, OnInit } from '@angular/core';
import { IconCardConfig, iconCardConfigDefault, IconCardImages, IconCardTextSizes } from '../models/icon-card.model';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent implements OnInit {

  @Input() config: IconCardConfig = iconCardConfigDefault;
  
  // template access niceities
  public iconCardImage: IconCardImages = this.config?.iconCardImage;
  public IconCardImagesEnum = IconCardImages;
  public IconCardTextSizesEnum = IconCardTextSizes;

  constructor() { }

  ngOnInit(): void {
    this.iconCardImage = this.config?.iconCardImage;
  }

}
