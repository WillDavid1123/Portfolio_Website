import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from "../views/Projects.vue"
import Announcements from "../views/Announcements.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/projects",
    name: 'Projects',
    component: Projects
  },
  {
    path: "/announcements",
    name: 'Announcements',
    component: Announcements
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
