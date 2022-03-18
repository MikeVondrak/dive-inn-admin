// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAV7hD9iOJD_XMVsd8uU88g63ap-8_r7jI",
    authDomain: "diveinnadmin.firebaseapp.com",
    projectId: "diveinnadmin",
    storageBucket: "diveinnadmin.appspot.com",
    messagingSenderId: "100135443835",
    appId: "1:100135443835:web:1ae5f4d17bda5ffa9631de",
    measurementId: "G-W25N2VK7PZ"
  },
  flickrConfig: {
    user: '193893336@N02',
    key: '306d51374865d4e6fa4b32b0fd5a7998',
    secret: '65d13dd1fe465537'
  },
  hasuraConfig: {
    gql_admin_secret: 'DiveInnHasAGqlSecret'
  },
  apolloConfig: {
    APOLLO_KEY: 'service:Dive-Inn-Admin:TWTacm-GgHaEn2Ew4JQ8ng',
    APOLLO_GRAPH_ID: 'Dive-Inn-Admin',
    APOLLO_GRAPH_VARIANT: 'current',
    APOLLO_SCHEMA_REPORTING: 'true',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
