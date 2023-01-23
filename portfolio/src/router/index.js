import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from "../views/Projects.vue"
import Announcements from "../views/Announcements.vue"
import About from "../views/About.vue"

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
  {
    path: "/about",
    name: "About",
    component: About
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
