import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ImageDisplayComponent } from './image-display.component';


export default {
  title: 'Public-Client/ImageDisplayComponent',  
  args: {
    title: 'Test Title',
    description: 'Test Description',
    isPortrait: false,
    imageUrl: '/assets/images/test1.jpg',      
  },
  decorators: [
    moduleMetadata({
      declarations: [ImageDisplayComponent],
      imports: [CommonModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator(story => `<div>${story}</div>`),
  ],
  component: ImageDisplayComponent,
} as Meta;



const Template: Story<ImageDisplayComponent> = (args: ImageDisplayComponent) => ({
  props: args,
});

export const Landscape = Template.bind({});
Landscape.args = {
  imageUrl: '/assets/images/test6.png',
};

export const Portrait = Template.bind({});
Portrait.args = {
  isPortrait: true,
};
