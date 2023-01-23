console.log("Hello")
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyDl5ST8dLIZ0zDFZQSlQ2CDaoaiNNLMVXM",
    authDomain: "cs-portfolio-44e18.firebaseapp.com",
    projectId: "cs-portfolio-44e18",
    storageBucket: "cs-portfolio-44e18.appspot.com",
    messagingSenderId: "361134280312",
    appId: "1:361134280312:web:07d3d5ada8e36cc906678d"
  };

//Initialize Firestore
firebase.initializeApp(firebaseConfig)

//Initialize Services
export const db = firebase.firestore()

//Collect data from collection references
//Home Page Data
var homePageData = []
db.collection("Home-Page").get().then((snapshot) => {
    snapshot.docs.map(doc => {
        homePageData.push(doc.data())
    })
})
export const homeData = homePageData
console.log(homeData)