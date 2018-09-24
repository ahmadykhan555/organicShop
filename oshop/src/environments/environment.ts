// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDK8qVq5JFyinRT6AQCYJVuLJHg9bUCv3g",
    authDomain: "oshop-f42c7.firebaseapp.com",
    databaseURL: "https://oshop-f42c7.firebaseio.com",
    projectId: "oshop-f42c7",
    storageBucket: "oshop-f42c7.appspot.com",
    messagingSenderId: "571454379951"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
