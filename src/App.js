import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import getFirebaseConfig from "./firebase-config";

const firebaseConfig = getFirebaseConfig();

const app = initializeApp(firebaseConfig);

function App() {
  // function handleImgClick(e) {
  //   const x = e.pageX - e.target.offsetLeft;
  //   const y = e.pageY - e.target.offsetTop;
  //   console.log(x, y);
  // }

  return <div></div>;
}

export default App;
