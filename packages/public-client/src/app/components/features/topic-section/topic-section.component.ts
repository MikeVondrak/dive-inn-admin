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
        this.sectionImgUrl = '../../../../assets/images/specials/Bud Light (Draft).jpg';
        this.sectionButton = 'VIEW';
        this.orientation = 'left';
    }
    
  }

}
