import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlbumDisplayComponent } from './album-display.component';


export default {
  title: 'Public-Client/AlbumDisplayComponent',
  decorators: [
    moduleMetadata({
      declarations: [AlbumDisplayComponent],
      imports: [CommonModule, BrowserAnimationsModule],
    }),
  ],
  component: AlbumDisplayComponent,
} as Meta;

const Template: Story<AlbumDisplayComponent> = (args: AlbumDisplayComponent) => ({
  props: args,
});

export const DefaultState = Template.bind({});
DefaultState.args = {
  albumTitle: 'Title',
  albumDescription: 'Description',
  albumImageUrls: [
    '../../../../../assets/images/logoLg.png',
    '/assets/images/logoLg.png',
    '/images/logoLg.png',
  ]
};
