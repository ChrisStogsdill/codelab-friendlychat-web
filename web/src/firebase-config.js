/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDNuTmMRhRBfaUE4EnhXLBAM2sqS5ANGYg",
  authDomain: "friendlychat-6ff17.firebaseapp.com",
  projectId: "friendlychat-6ff17",
  storageBucket: "friendlychat-6ff17.appspot.com",
  messagingSenderId: "1045327457248",
  appId: "1:1045327457248:web:748c815fb66ed477cc1985",
  measurementId: "G-HTW3X9746J"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}