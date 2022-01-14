import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { AuthService } from '../../auth/services/auth/auth.service';
import { AuthServiceMock } from '../../auth/services/auth/auth.service.mock';

import { LoginPageComponent } from './login-page.component';

export default {
  title: 'Admin-Client/LoginPageComponent',
  decorators: [
    moduleMetadata({
      declarations: [LoginPageComponent],
      imports: [CommonModule, BrowserAnimationsModule],
      providers: [{ provide: AuthService, useClass: AuthServiceMock }],
    }),
  ],
  component: LoginPageComponent,
} as Meta;

const Template: Story<LoginPageComponent> = (args: LoginPageComponent) => ({
  props: args,
});

export const DefaultState = Template.bind({});
DefaultState.args = {
};
