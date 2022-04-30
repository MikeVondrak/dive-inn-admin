import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopicSectionComponent } from './topic-section.component';

export default {
  title: 'Public-Client/TopicSectionComponent',
  decorators: [
    moduleMetadata({
      declarations: [TopicSectionComponent],
      imports: [CommonModule],
      providers: [],

    }),
    componentWrapperDecorator(story => `<div style="padding: 2rem; background: #000; width: 70vw;">${story}</div>`),
  ],
  component: TopicSectionComponent,
} as Meta;

const Template: Story<TopicSectionComponent> = (args: TopicSectionComponent) => ({
  props: args,
});

export const LeftState = Template.bind({});
LeftState.args = {
  sectionName: 'MENU',
  sectionTitle: 'Specials',
  sectionNote: 'Daily, weekly & seasonal specials, 365 days a year',
  sectionImgUrl: '../../../../assets/images/home/DiveInnDraft.jpg',
  sectionButton: 'View',
  orientation: 'left'
};

export const RightState = Template.bind({});
RightState.args = {
  sectionName: 'BOOKINGS',
  sectionTitle: 'Events',
  sectionNote: 'Live music, sports, games & festivities',
  sectionImgUrl: '../../../../assets/images/inside/Interiors_233.jpg',
  sectionButton: 'Book Now',
  orientation: 'right',
};
