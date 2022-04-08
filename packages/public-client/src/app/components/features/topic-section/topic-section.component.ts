import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-section',
  templateUrl: './topic-section.component.html',
  styleUrls: ['./topic-section.component.scss']
})
export class TopicSectionComponent implements OnInit {

  @Input() sectionName: string = '';

  public orientation: string = '';
  sectionNote: string = '';
  sectionImgUrl: string = '';
  sectionButton: string = '';

  constructor() { }

  ngOnInit(): void {
    switch (this.sectionName) {
      case 'MENU':
        this.sectionNote = 'A little note about the type of food';
        this.sectionImgUrl = '../../../../assets/images/specials/Dive Inn (Draft).jpg';
        this.sectionButton = 'VIEW';
        this.orientation = 'left';
        break;
      case 'BOOKINGS':
        this.sectionNote = 'Set up your event with us';
        this.sectionImgUrl = '../../../../assets/images/inside/Interiors_233.jpg';
        this.sectionButton = 'BOOK';
        this.orientation = 'right';
        break;
    }
    
  }

}
