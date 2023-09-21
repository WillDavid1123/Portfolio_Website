import { createStore } from 'vuex'

//Firebase Imports
import "firebase/compat/firestore";

const store =  createStore({
  state: {
    //Data for Project Modal
    Name: "null",
    Desc: null,
    Tags: null,
    Link: null,
    Link_Name: "null"
  },
  mutations: {
    //Project Modal Update
    setProjectModal(state, payload) {
      console.log(payload)
      state.Name = payload[0].Name
      state.Desc = payload[0].Desc
      state.Link = payload[0].Link
      state.Link_Name = payload[0].Link_Name
      state.Tags = payload[1]
    }
  },
  actions: {
    //Project data needs updating
    updateProject(context, payload) {
      context.commit('setProjectModal', payload)
    }
  },
  getters: {
    //Return project data
    project(state) {
      return state.Name, state.Desc, state.Link, state.Tags
    }
  },
  modules: {}
})

export default store