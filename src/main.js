import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = initializeApp({
  apiKey: "AIzaSyBtOenDc6esF3LovwKKVQGRd1WbEC8pfQM",
  authDomain: "raven-45c24.firebaseapp.com",
  projectId: "raven-45c24",
  storageBucket: "raven-45c24.firebasestorage.app",
  messagingSenderId: "662294851278",
  appId: "1:662294851278:web:e8eec5e4eb4bc2d3626a9f",
  measurementId: "G-F6SKD9KRX1"
});
const analytics = getAnalytics(firebase);
const app = createApp(App)

app.use(router);
app.mount('#app');