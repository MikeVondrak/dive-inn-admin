import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlbumDisplayComponent } from './album-display.component';


export default {
  title: 'Public-Client/AlbumDisplayComponent',  
  args: {
    title: 'Test Title',
    description: 'Test Description',
    imageUrls: [
      '/assets/images/logoLg.png',
      '/assets/images/logoLg.png',
      '/assets/images/logoLg.png',
      '/assets/images/logoLg.png',
      '/assets/images/logoLg.png',
    ]
  },
  decorators: [
    moduleMetadata({
      declarations: [AlbumDisplayComponent],
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
