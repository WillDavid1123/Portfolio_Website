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
const hPage = ref([])

onSnapshot(collection(db, "Home"), (querySnapshot) => {
  const docs = [];
  querySnapshot.forEach((doc) => {
    const text = doc.data()
    docs.push(text)
  })
  hPage.value = docs
})

//  Announcements Page
const anPage = ref([])

onSnapshot(collection(db, "Announcements"), (querySnapshot) => {
  const docs = [];
  querySnapshot.forEach((doc) => {
    const text = doc.data()
    docs.push(text)
  })
  anPage.value = docs
})

//  Projects Page
const pPage = ref([])

onSnapshot(collection(db, "Projects"), (querySnapshot) => {
  const docs = [];
  querySnapshot.forEach((doc) => {
    const text = doc.data()
    docs.push(text)
  })
  pPage.value = docs
})

//  About Page
const abPage = ref([])

onSnapshot(collection(db, "About"), (querySnapshot) => {
  const docs = [];
  querySnapshot.forEach((doc) => {
    const text = doc.data()
    docs.push(text)
  })
  abPage.value = docs
})

export {
  db, hPage, anPage, pPage, abPage
}