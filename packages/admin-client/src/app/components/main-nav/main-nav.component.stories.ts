import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { MainNavComponent } from './main-nav.component';

export default {
  title: 'Admin-Client/MainNavComponent',
  decorators: [
    moduleMetadata({
      declarations: [MainNavComponent],
      imports: [CommonModule, BrowserAnimationsModule],
    }),
  ],
  component: MainNavComponent,
} as Meta;

const Template: Story<MainNavComponent> = (args: MainNavComponent) => ({
  props: args,
});

export const DefaultState = Template.bind({});
DefaultState.args = {
};
