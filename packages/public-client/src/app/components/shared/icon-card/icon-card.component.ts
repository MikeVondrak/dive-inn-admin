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
  public get IconCardImagesEnum() { return IconCardImages }; // NOTE: have to use getter for Storybook to work easily
  public get IconCardTextSizesEnum() { return IconCardTextSizes };

  constructor() { }

  ngOnInit(): void {
    this.iconCardImage = this.config?.iconCardImage;
  }

}
