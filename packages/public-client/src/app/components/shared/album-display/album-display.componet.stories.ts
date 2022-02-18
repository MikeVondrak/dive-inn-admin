import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlbumDisplayComponent } from './album-display.component';
import { ImageDisplayComponent } from '../image-display/image-display.component';


export default {
  title: 'Public-Client/AlbumDisplayComponent',  
  args: {
    title: 'Test Title',
    description: 'Test Description',
    imageUrls: [
      '/assets/images/test1.jpg',
      '/assets/images/test2.JPG',
      '/assets/images/test6.png',
      '/assets/images/test4.jpg',
      '/assets/images/test5.gif',
    ],

  },
  argTypes: {
    positions: {
      name: 'positions',
      control: {
        type: 'array'
      }
    },
    imgTimer$: {
      control: {
        type: 'object'
      }
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [AlbumDisplayComponent, ImageDisplayComponent],
      imports: [CommonModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator(story => `<div style="border: 1px solid gray; height: 600px; width: 800px;">${story}</div>`),
  ],
  component: AlbumDisplayComponent,
} as Meta;



const Template: Story<AlbumDisplayComponent> = (args: AlbumDisplayComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  description: 'super super super long Description Description Description',
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  title: 'Title Test 2',
  description: 'super',
  showInfo: true,
};
