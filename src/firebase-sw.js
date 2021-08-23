importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-analytics.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
  apiKey: "AIzaSyANkcSUCqHkgP89GsDjf6-sSBlyH_U-vyU",
  authDomain: "diniz-barber.firebaseapp.com",
  databaseURL: "https://diniz-barber-default-rtdb.firebaseio.com",
  projectId: "diniz-barber",
  storageBucket: "diniz-barber.appspot.com",
  messagingSenderId: "891112854888",
  appId: "1:891112854888:web:cf081cad488c4cc68972dd",
  measurementId: "G-3SM0KRNJER"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
