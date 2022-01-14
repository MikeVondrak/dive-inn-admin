import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
}