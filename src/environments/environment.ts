// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrls: {
    books: 'https://gutendex.com/books?ids=',
    dogImage: 'https://dog.ceo/api/breeds/image/random'
  },
  firebase: {
    apiKey: "AIzaSyC79D1lmkT-BMpwxhOD7Jvzx53YXI1BQQs",
    authDomain: "b-749b4.firebaseapp.com",
    projectId: "b-749b4",
    storageBucket: "b-749b4.firebasestorage.app",
    messagingSenderId: "616602352669",
    appId: "1:616602352669:web:1b5f34ea8beda23b1b9af4",
    measurementId: "G-LJEG66DC5J"
    
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
