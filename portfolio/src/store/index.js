import { createStore } from 'vuex'

//Firebase Imports
import "firebase/compat/firestore";
import { projs } from "../firebase.js";

const store =  createStore({
  state: {
    projects: []
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload
    }
  },
  actions: {
    getProjects() {
      this.commit("setProjects", projs)
    }
  },
  getters: {
    projects(state) {
      return state.projects
    }
  },
  modules: {}
})

store.dispatch("getProjects")
console.log(store.state.projects)

export default store