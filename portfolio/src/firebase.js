import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { onSnapshot, collection } from "firebase/firestore"
import { ref } from "vue"

const firebaseConfig = {
  apiKey: "AIzaSyD4-z4PwvQw0R2NUZLt8Z3M8CxmbsObTGQ",
  authDomain: "portfolio-website-70718.firebaseapp.com",
  projectId: "portfolio-website-70718",
  storageBucket: "portfolio-website-70718.appspot.com",
  messagingSenderId: "116897333691",
  appId: "1:116897333691:web:c7a24fc53ff1bd9a91c49e"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

//Grab data for each page on the site
//  Home Page
const homePage = ref([])

onSnapshot(collection(db, "Home Page"), (querySnapshot) => {
  const textDocs = [];
  querySnapshot.forEach((doc) => {
    const text = doc.data().text
    textDocs.push(text)
  })
  homePage.value = textDocs
})

export {
  db, homePage
}