// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000',
  firebase: {
    apiKey: "AIzaSyDQ3mgwZAlme_p18k_ZnEwzjy-PWp92QX8",
    authDomain: "todo-list-feb0f.firebaseapp.com",
    databaseURL: "https://todo-list-feb0f.firebaseio.com",
    projectId: "todo-list-feb0f",
    storageBucket: "todo-list-feb0f.appspot.com",
    messagingSenderId: "800845420283",
    appId: "1:800845420283:web:94cdd8db68994a2e"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
