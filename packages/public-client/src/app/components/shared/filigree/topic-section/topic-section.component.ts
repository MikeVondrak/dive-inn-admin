import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-section',
  templateUrl: './topic-section.component.html',
  styleUrls: ['./topic-section.component.scss']
})
export class TopicSectionComponent implements OnInit {

  @Input() sectionName: string = '';

  public orientation: string = '';
  public sectionTitle: string = '';
  sectionNote: string = '';
  sectionImgUrl: string = '';
  sectionButton: string = '';

  constructor() { }

  ngOnInit(): void {
    // @TODO - move these to Inputs
    switch (this.sectionName) {
      case 'MENU':
        this.sectionTitle = 'Specials';
        this.sectionNote = 'Daily, weekly & seasonal specials, 365 days a year';
        this.sectionImgUrl = '../../../../assets/images/home/DiveInnDraft.jpg';
        this.sectionButton = 'View';
        this.orientation = 'left';
        break;
      case 'BOOKINGS':
        this.sectionTitle = 'Events';
        this.sectionNote = 'Live music, sports, games & festivities';
        this.sectionImgUrl = '../../../../assets/images/inside/Interiors_233.jpg';
        this.sectionButton = 'Book Now';
        this.orientation = 'right';
        break;
    }
    
  }

}
