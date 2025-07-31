  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // T=ODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAYwbk9VZgIPjMlqkUrCLHvlhjz7zBt9xA",
    authDomain: "sr-wave-367307.firebaseapp.com",
    projectId: "sr-wave-367307",
    storageBucket: "sr-wave-367307.firebasestorage.app",
    messagingSenderId: "480878711964",
    appId: "1:480878711964:web:e2c24b289268e219398959",
    measurementId: "G-VKJ83GW2KF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);