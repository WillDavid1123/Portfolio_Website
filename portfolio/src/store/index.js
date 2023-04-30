import { createStore } from 'vuex'

//Firebase Imports
import "firebase/compat/firestore";
// import { homeData } from "../firebase.js"

const store =  createStore({
  state: {
    //Firestore States
    // homeDetails: []
  },
  mutations: {
    //Set page details
    // setHomeDetails(state, payload) {
    //   state.homeDetails = payload
    // }
  },
  actions: {
    //Get page details
    // getHomeDetails() {
    //   this.commit("setHomeDetails", homeData)
    // }
  },
  getters: {
    //Firestore Getters
    // homePage(state) {
    //   return state.homeDetails
    // }
  },
  modules: {
  }
})

// store.dispatch("getHomeDetails")

export default store
