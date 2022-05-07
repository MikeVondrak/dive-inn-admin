import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IconCardConfig, iconCardConfigDefault, IconCardImages, IconCardTextSizes } from '../models/icon-card.model';

const flipKeyframes = [
  style({
    offset: 0,
    transform: 'scale(1) rotateY(0deg)',
  }),
  style({
    offset: 0.5,
    transform: 'scale(1.75) rotateY(90deg)',
  }),
  style({
    offset: 1,
    transform: 'scale(1) rotateY(180deg)',
  })
];
const unflipKeyframes = [
  style({
    offset: 0,
    transform: 'scale(1) rotateY(180deg)',
  }),
  style({
    offset: 0.5,
    transform: 'scale(1.75) rotateY(90deg)',
  }),
  style({
    offset: 1,
    transform: 'scale(1) rotateY(0deg)',
  }),
];

const cardFlipAnimation = [
  trigger('cardFlipTransition', [
    state('faceDown', style({ transform: 'rotateY(180deg)' })),
    state('faceUp', style({ transform: 'rotateY(0deg)' })),
    transition('faceDown => faceUp', animate('0.6s ease', keyframes(unflipKeyframes))),
    transition('faceUp => faceDown', animate('0.6s ease', keyframes(flipKeyframes))),
  ]),
];

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
  animations: [cardFlipAnimation],
})
export class IconCardComponent implements OnInit {

  @Input() config: IconCardConfig = iconCardConfigDefault;
  
  public flipped: boolean = false;  

  // template access niceities
  public iconCardImage: IconCardImages = this.config?.iconCardImage;
  public get IconCardImagesEnum() { return IconCardImages }; // NOTE: have to use getter for Storybook to work easily
  public get IconCardTextSizesEnum() { return IconCardTextSizes };

  constructor() { }

  ngOnInit(): void {
    this.iconCardImage = this.config?.iconCardImage;
  }

  public flipCard() {
    this.flipped = !this.flipped;
  }

}
