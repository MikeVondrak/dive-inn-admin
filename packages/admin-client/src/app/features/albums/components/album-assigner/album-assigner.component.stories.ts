import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { Apollo, QueryRef } from 'apollo-angular';
import { FlickrApiService } from 'src/app/services/flickr/flickr.api.service';
import { FlickrApiServiceMock } from 'src/app/services/flickr/flickr.api.service.mock';

import { AlbumAssignerComponent, AlbumByLocationResponse, AlbumByLocationVariables } from './album-assigner.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

// const ApolloMock = {
//   watchQuery: ({ query, variables }): QueryRef<AlbumByLocationResponse, AlbumByLocationVariables> =>  {
//     return new QueryRefMock()
//   }
// }
const f = new FlickrApiServiceMock();

export default {
  title: 'Admin-Client/AlbumAssignerComponent',
  decorators: [
    moduleMetadata({
      declarations: [AlbumAssignerComponent],
      imports: [CommonModule, BrowserAnimationsModule, ApolloTestingModule, HttpClientTestingModule],
      providers: [
        //{ provide: Apollo, useClass: ApolloTestingController },
        { provide: FlickrApiService, useClass: FlickrApiServiceMock },
      ],

    }),
  ],
  component: AlbumAssignerComponent,
} as Meta;

const Template: Story<AlbumAssignerComponent> = (args: AlbumAssignerComponent) => ({
  props: args,
});

export const DefaultState = Template.bind({});
DefaultState.args = {
};
