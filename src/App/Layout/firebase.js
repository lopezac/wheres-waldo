import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyB0KzsONSVUJ9V7gWvZl7OXoUQPnnw055s",
    authDomain: "wheres-waldo-49747.firebaseapp.com",
    projectId: "wheres-waldo-49747",
    storageBucket: "wheres-waldo-49747.appspot.com",
    messagingSenderId: "1069113175170",
    appId: "1:1069113175170:web:6afa9eca98e02ff523989b",
};

export default function Firebase() {
  initializeApp(config);

  function db() {
    return getFirestore();
  }

  return {db};
}
